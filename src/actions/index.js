export const INCREMENT = "INCREMENT";

export const DECREMENT = "DECREMENT";

export const MULTIPLY = "MULTIPLY";

export const DIVIDE = "DIVIDE";

export const incNumber = (num) => {
    return {
        type : INCREMENT,
        payload : num 
    }
}
export const decNumber = () => {
    return {
        type : DECREMENT,
    }
}
export const multNumber = (num) => {
    return {
        type : MULTIPLY,
        payload : num
    }
}
export const diviNumber = (num) => {
    return {
        type : DIVIDE,
        payload : num
    }
}