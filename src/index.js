import * as Y from "yjs";
import { WebrtcProvider } from "y-webrtc";
import { QuillBinding } from "y-quill";
import Quill from "quill";
import QuillCursors from "quill-cursors";

Quill.register('modules/cursors', QuillCursors);

const quill = new Quill(document.querySelector('#editor'), {
    modules: {
        cursors: true,
        toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline'],
            ['image', 'code-block']
        ],
        history: {
            userOnly: true
        }
    },
    placeholder: 'Start collaborating...',
    theme: 'snow'
});
// A yjs document holds the shared data.
const ydoc = new Y.Doc();
const provider = new WebrtcProvider('quill-demo-room', ydoc);

// All of our network providers implement the awareness crdt.
const awareness = provider.awareness;

// You can observe when a user updates their awareness information.
awareness.on('change', changes => {
    // Whenever somebody updates their awareness information, we log all awareness information from all users.
    console.log(Array.from(awareness.getStates().values()));
});

// You can think of your own awareness information as a key-value store. We update our "user" field to propagate relevant user information.

awareness.setLocalStateField('user', {
    // Define a print name that should be displayed.
    name: 'Kuldeep Upreti',
    // Define a color that should associated to the user:
    color: '#ffb61e'
});



// Define a shared text type on the document.
const ytext = ydoc.getText('quill');

// Create an editor-binding which "binds" the quill editor to a Y.Text type.
const binding = new QuillBinding(ytext, quill, provider.awareness);
