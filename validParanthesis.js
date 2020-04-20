// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
var isValid = function(s) {
    if(s.length % 2 !=0){
        return false;
    }
    var stack = array();
    for(c of s){
        if(c=='(' || c=='[' || c=='{'){
            stack.push(c);
        }else if(c==')' || c =='}' || c==']'){
            let top = stack.pop(c);
            if(c==')' && top =='('){
                continue;
            }else if(c=='}' && top =='{'){
                continue;
            }else if(c==']' && top =='['){
                continue;
            }else{
                return false;
            }
        }
    }
    if(stack.length != 0){
        return false;
    }
    return true;
    
};