export const summary = (str, limit = 100) => {
    if ((str===null) || (str===''))
        return false;
    else
        str = str.toString();
    return str.replace(/<[^>]*>/g, '').substring(0, limit);
}

