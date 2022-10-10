import very_sad from "../assets/very_sad.svg";
import sad from "../assets/sad.svg";
import neutral from "../assets/neutral.svg";
import happy from "../assets/happy.svg";
import very_happy from "../assets/very_happy.svg";
import unmarked from "../assets/unmarked.svg"

export const emoji = (e) => {
    switch (e){
        case 1:{
            return very_sad
        }
        case 2:{
            return sad
        }
        case 3:{
            return neutral
        }
        case 4:{
            return happy
        }
        case 5:{
            return very_happy
        }
        default : {
            return unmarked
        }
    }
}