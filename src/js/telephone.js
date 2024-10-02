export function normlizeTelephone(telephone) {
    const regExpPlus = /^8/;
    const regExpSplit = /[ |\-|(|)]/g;
    // telephone = telephone.replace(regExpPlus, '+7');
    // telephone = telephone.replace(regExpSplit, '');
    return telephone.replace(regExpPlus, '+7').replace(regExpSplit, '');
}