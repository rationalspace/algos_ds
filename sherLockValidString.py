from collections import Counter

def isValid(s):
    cnt = Counter(s)
    print(cnt)
    if len(set(cnt.values())) == 1: # all characters have same frequency
        return 'YES'
    elif len(set(cnt.values())) > 2: # if more than 2 different frequency
        return 'NO'
    else:
        m1 = max(cnt.values())
        m2 = min(cnt.values())
        print(cnt.values())
        print(m2)
        print(list(cnt.values()).count(m2))
        if list(cnt.values()).count(m2) == 1 or list(cnt.values()).count(m1) == 1:
            return "YES"
        if list(cnt.values()).count(m2)>1 or m1 - m2 > 1 : #difference between max and min freq is greater than 1
            return "NO"    
        else: #difference between frequencies is 1
            return "YES" 

s = 'abcdefghhgfedecba'
print(isValid(s))