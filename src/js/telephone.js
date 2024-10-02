export function normlizeTelephone(telephone) {
    const regExpPlus = /^8/;
    const regExpSplit = /[ |\-|(|)]/g;
    return telephone.replace(regExpPlus, '+7').replace(regExpSplit, '');
}