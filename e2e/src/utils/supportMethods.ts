import endPointPath from "../../config/enpoints.json";


export const getInterestCalculatorEndPoint = (
    principal: Number,
    rateofInterest: Number,
    year: Number,
    typeOfInterest: string
): string => {

    let qparam: {
        amount: Number;
        interestRate: Number;
        duration: Number;
        accrualType: string;
    } = {
        amount: 0,
        interestRate: 0,
        duration: 0,
        accrualType:""
    }

    qparam.amount = principal
    qparam.interestRate = rateofInterest
    qparam.duration = year,
    qparam.accrualType = typeOfInterest

    const endPoint = endPointPath.interestCalculation+"?amount="+qparam.amount+"&interestRate="+qparam.interestRate+"&duration="+qparam.duration+"&accrualType="+qparam.accrualType
    return endPoint
}