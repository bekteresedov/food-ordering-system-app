import { StaticImport } from "next/dist/shared/lib/get-img-props";
import bear from './images/bear.png'
import cat from './images/cat.png'
import gamer from './images/gamer.png'
import hacker from './images/hacker.png'
import man from './images/man.png'
import man2 from './images/man (1).png'
import user from './images/user.png'
import woman from './images/woman.png'
import chicken from './images/chicken.png'
export const avatarList: { file: string, src: StaticImport }[] = [

    {
        file: "user",
        src: user
    },
    {
        file: "chicken",
        src: chicken
    },

    {
        file: "bear",
        src: bear
    },

    {
        file: "cat",
        src: cat
    },

    {
        file: "gamer",
        src: gamer
    },

    {
        file: "hacker",
        src: hacker
    },

    {
        file: "man",
        src: man
    },

    {
        file: "man2",
        src: man2
    },

    {
        file: "woman",
        src: woman
    },
]