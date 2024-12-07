pub fn str_str(haystack: String, needle: String) -> i32 {
    let right = needle.len();

    for idx in 0..haystack.len() {
        let chunk = haystack.get(idx..idx + right);

        if chunk.is_some() && chunk.unwrap() == needle {
            return idx as i32;
        }
    }

    return -1;
}

pub fn parentheses_is_balanced(s: String) -> bool {
    let mut stack: Vec<char> = Vec::with_capacity(s.len());

    for ch in s.chars() {
        match ch {
            '(' | '{' | '[' => stack.push(ch),
            ')' | '}' | ']' => {
                if stack.is_empty() {
                    return false;
                }

                let open_br = stack.pop().unwrap();

                let matched = match open_br {
                    '(' => ch == ')',
                    '{' => ch == '}',
                    '[' => ch == ']',
                    _ => false,
                };

                if !matched {
                    return false;
                }
            }
            _ => {}
        }
    }

    stack.is_empty()
}

#[cfg(test)]
mod tests {
    use crate::str::{parentheses_is_balanced, str_str};

    #[test]
    fn it_works() {
        assert_eq!(str_str(String::from("sadbutsad"), String::from("sad")), 0);
    }

    #[test]
    fn short() {
        assert_eq!(str_str(String::from("hello"), String::from("ll")), 2);
    }

    #[test]
    fn check_breackets_is_balanced() {
        assert_eq!(parentheses_is_balanced(String::from("()")), true);
    }
}
