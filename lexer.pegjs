Code
  = lines:("\n" / Line)* {
    return lines.filter(function(line){
      if (typeof line === "object") return true;
    });
  }

Line
  = node:(Definition / Function) _ "\n"? {
    return node;
  }

Group
  = group:"("? _ val:MultiExpression _ ")" _ add:(Operator _? Group)? {
    return {
      "node": "group",
      "left": val,
      "right": (function(){
        if (add) {
          return {
            "node": add[0],
            "left": add[add.length-1]
          }
        }
      })()
    }
  }

Function "function"
  = _ "function" _ name:Name _ "(" _  _ ")" {
    return {
      "node": "func",
      "left": name.join('')
    }
  }

Name
  = name:[a-zA-Z_]+

Definition
  = _ type:("let" / "const") _ name:Name _ "=" _ value:(Group / MultiExpression) _ ";" {
    return {
      "node": type,
      "left": name.join(''),
        "right": value
    };
  }

Variable
  = value:(Float/Integer/True/False) {
    return value;
  }

Operator
  = op:("/" / "+" / "-" / "*") {
    return op;
  }

MultiExpression
  = _ left:Expression _ op:Operator? _ right:Expression? _ {
    if (op) { return {
      "node": op,
      "left": left,
      "right": right
    }}
    else { return left; }
  }

Expression
  = _ left:Variable _ op:Operator? _ right:Variable? _ {
        if (op) { return {
            "node": op,
            "left": left,
            "right": right
        }}
        else { return left; }
    }

Integer "integer"
  = [0-9]+ {
    return {
      "node": "value",
      "left": "integer",
      "right": parseInt(text(), 10)
    }
  }

Float "float"
  = val:([0-9]+ "." [0-9]+) {
    return {
      "node": "value",
      "left": "float",
      "right": parseFloat(text(), 10)
    }
  }

True "true"
  = "true" {
    return {
      "node": "value",
      "left": "boolean",
      "right": true
    }
  }

False "false"
  = "false" {
    return {
      "node": "value",
      "left": "boolean",
      "right": false
    }
  }

_ "whitespace"
  = [ \t\n\r]*