function expect (value) {
    return {
        tobe: exp=> {
            if (value === exp){
                console.log("testIsPassed")
            } else {
                console.log("exp not equal value")
            }
        }
    }
}


const sum = (a,b)=> a+b

// const nativeNull = ()=> null

expect(sum(41,1)).tobe(15)