function isCloseTo(a,b,tolerance=0.00001){
    return Math.abs(a-b)<tolerance;
}
module.exports={isCloseTo};