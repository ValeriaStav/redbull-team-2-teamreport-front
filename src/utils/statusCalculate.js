export const statusCalculate = (props) =>
{
    let answer = [0,0,0,0,0,0,0,0,0,0];
    let counter = [0,0,0,0,0,0,0,0,0,0];
    for (let prop of props){
        answer[0] += prop.current
        counter[0] += prop.current !== 0
        answer[1] += prop.ago1
        counter[1] += prop.ago1 !== 0
        answer[2] += prop.ago2
        counter[2] += prop.ago2 !== 0
        answer[3] += prop.ago3
        counter[3] += prop.ago3 !== 0
        answer[4] += prop.ago4
        counter[4] += prop.ago4 !== 0
        answer[5] += prop.ago5
        counter[5] += prop.ago5 !== 0
        answer[6] += prop.ago6
        counter[6] += prop.ago6 !== 0
        answer[7] += prop.ago7
        counter[7] += prop.ago7 !== 0
        answer[8] += prop.ago8
        counter[8] += prop.ago8 !== 0
        answer[9] += prop.ago9
        counter[9] += prop.ago9 !== 0
    }
    for (let i = 0; i < 10; i++){
        if(counter[i] !== 0)
            answer[i] = Math.round(answer[i] / counter[i]);

    }

    return answer;
}