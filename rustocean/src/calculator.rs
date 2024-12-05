pub fn evaluate_rpn(tokens: Vec<String>) -> i32 {
    let mut stack = Vec::with_capacity(tokens.len());
    let operators = "+-*/";

    for token in tokens {
        if operators.contains(&token) {
            let a = stack.pop().unwrap();
            let b = stack.pop().unwrap();

            let result = match token.as_ref() {
                "+" => a + b,
                "-" => b - a,
                "*" => a * b,
                "/" => b / a,
                _ => unreachable!(),
            };

            stack.push(result);
        } else {
            let parsed = token.parse::<i32>().unwrap();
            stack.push(parsed);
        }
    }

    stack.pop().unwrap()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        assert_eq!(
            evaluate_rpn(["2", "1", "+", "3", "*"].map(|n| n.to_string()).to_vec()),
            9
        );
    }

    #[test]
    fn divide() {
        assert_eq!(
            evaluate_rpn(["4", "13", "5", "/", "+"].map(|n| n.to_string()).to_vec()),
            6
        );
    }
}
