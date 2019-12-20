import fb from "../../images/SocialForms/fb.svg";
import linkin from "../../images/SocialForms/linkin.svg";
import link from "../../images/SocialForms/link.svg";

export const Forms =[
    {
        id: 'pf1',
        label: 'First Name',
        placeholder: 'Enter First Name',
        required: true
    },
    {
        id: 'pf2',
        label: 'Last Name',
        placeholder: 'Enter First Name',
        required: true
    },
    {
        id: 'pf3',
        label: 'University Affiliation',
        placeholder: 'Enter university name',
        required: false
    },
    {
        id: 'pf4',
        label: 'Email Address',
        placeholder: 'Enter email address',
        required: false
    },
];

export const SocialForms=[
    { 
        placeholder: 'Paste link here',
        src: fb
    },

    { 
        placeholder: 'Paste link here',
        src: linkin
    },

    { 
        placeholder: 'Paste link here',
        src: link
    },
]
