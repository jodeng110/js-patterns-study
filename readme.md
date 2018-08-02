# Javascript Patterns

- 자바스크립트는 클래스가 없으며 함수(function)은 일급 객체(first-class object)

## Chapter 1 개요

##### '일급 객체'가 가지는 특징
- 변수나 데이터 구조 안에 담을 수있다.
- 인자로 전달 가능
- 반환 값(return value)로 사용 가능
- 런타임에 생성 가능
- 할당에 사용된 이름과 관계없이 고유하게 식별 가능.

### 1.1 패턴
##### SW 개발에서 '패턴'이란?
- 일반적인 문제에 대한 해결책을 가르침.
- 곧바로 복사해서 붙여넣을 수 있는 코드 형태의 답이아니라, 모범적인 관행, 쓰임새에 맞게 추상화된 원리, 어떤 범주의 문제를 해결하는 템플릿에 더 가까움.

##### 패턴을 알아보는 이유?
- 패턴은 검증된 실행방법을 사용하여 쓸데 없이 시간을 낭비하지 않고 더 나은 코드를 작성가능하게 해줌.
- 추상화 단계 제공. 인간의 뇌가 주어진 시간 동안 생각할 수 있는 정보의 양에는 한계가 있다. 따라서 복잡한 문제를 고민할 때는 저수준의 세부 사항에 신경쓰지 않도록, 자기 완결성을 갖춘 구성요소(패턴)들을 사용하여 설명하는 것이 도움이 됨.
- 개발자와 팀 간의 커뮤니테이션의 도움이 된다. 특정 코딩 기법이나 접근 방법에 이름을 붙이는 것만으로도 모두가 같은 이야기를 하고 있다는 사실을 인지시켜줌.

##### 패턴 종류
- 디자인 패턴
    - Singleton, Factory, Decorator, Observer 등
    - Stringly typed Language : C++, JAVA
    - Loosely Typed Dynamic Language : 자바스크립트
- 코딩 패턴
    - 자바스크립트 특유의 패턴
    - 함수의 다양한 활용과 같은 자바스크립트의 독특한 기능과 연관된 훌륭한 실천 방법
- 안티 패턴
    - 버그나 코딩에러가 아니라, 문제를 해결하기보다는 오류를 더 많이 일으킬 수 있는 흔히 잘못 사용하는 접근 방법

### 1.2 자바스크립트 개념
#### 객체 지향
- 자바스크립트는 객체지향언어이다.

##### 원시 데이터 타입
- number, string, boolean, null, undefined, Symbol(ES6)

##### 객체란 무엇인가?
- 객체는 단지 이름이 지정된 프로퍼티 모음
- key-value 쌍으로 이뤄진 목록
- 객체의 프로퍼티가 함수일 경우 '메서드'라고 부름
- 생성한 객체를 언제든지 수정 가능
- 객체의 멤버를 추가, 삭제, 변경 가능.

#### 주요 객체 타입
- 네이티브 객체 : ECMAScript 표쥰에 정의된 객체
    - (ex. 내장객체 Array, Date.. 사용자 정의 객체 var o = {};)
- 호스트 객체 : 호스트 환경(ex. 브라우저 환경)에서 정의된 객체
    - window, document
- 어떤 객체가 호스트 객체인지 궁금하다면 코드를 브라우저가 아닌 다른 환경에서 실행시켜보면된다. 만약 잘 동작한다면 네이티브 객체만을 사용하고 있는 것!

##### 클래스가 없다.
- 자바스크립트에서는 클래스가 없다.
- 오직 객체만을 다룬다는 사실을 받아들여라!
- Gof(Gang of Four Book - 네명의 저자에서 이름을 따온 책)책에서 말하는 일반적인 규칙 중 하나는 '클래스 상속 보다는 객체의 합성을 우선시하라'는 것.
    - 여기저기에 놓여있는 조각들을 사용해 객체를 합성할 수 있다면 이것이 복잡한 부모-자식 상속 체인을 사용하거나 클래스화하는 것보다 더나은 접근방법
    - 자바스크립트에는 클래스가 없어서 어차피 '객체 합성'을 해야한다.

#### 프로토 타입
- 상속은 다양한 방법으로 구현할 수 있는데, 주로 프로토타입을 사용
- 프로토타입은 객체
- 사용자가 생성한 모든 함수는 새로운 빈 객체를 가리키는 prototype 프로퍼티를 가짐.
- 프로토타입 객체의 constructor 프로퍼티가 가리키는 것이 내장된 Object()가 아닌 사용자가 생성한 함수라는 점만 다름.
- 모든 함수가 prototype프로퍼티를 가짐.

#### 실행환경
- 자바스크립트 프로그램은 실행하기 위한 환경이 필요하다.
- 일반적인 자바스크립트 실행환경은 브라우저(but, 유일한 실행환경 X)
- 실행 환경은 자신만의 호스트 객체 제공

#### ECAMScript 5
- DOM (Document Object Model), BOM (Browser Object Model), 규정 외의 호스트 객체를 제외한 코어 자바스크립트 프로그래밍언어는 ECMAScript 표준에 기반

#### JSLint
- 자바스크립트는 정적 컴파일을 하지 않는 인터프리터 언어.
- 사소한 타이핑 실수를 알아채지 못한 채 잘못된 프로그램을 배포할 가능성 있어!
- 더글라스 크락포드가 개발한 자바스크립트 코드 품질 도구
- 코드를 검사하고 잠재적인 문제들에 대해 경고해줌.

#### 콘솔 객체 (console)
- 자바스크립트에 포함되어 있지는 않지만 개발 환경의 일부분.
- alert()를 띄우거나 현재 페이지를 변경하는 대신 편하게 사용할 수 있어.

## Chapter 2 기초
- 전역변수 최소화
- var 선언 한번만.
- 루프내에서 length는 캐시해두고 사용
- 코딩 규칙 준수
- API 문서 작성
- 동료 리뷰 수행
- lint 실행

### 2.1 유지보수 가능한 코드 작성
- SW 는 버그를 수정하는 비용이 듬.
- 버그가 공개적으로 출시된 제품 안에 숨어 들어간 경우 특히 비용 커짐
- 발견 즉시 버그를 고칠 수 있다면 가장 좋음.
- 코드가 어떤 일을 수행하는지 머릿속에 아직 생생.

##### 시간이 흐른다음 코드를 다시 들여다 볼때 시간걸리는 이유?
- 문제를 다시 학습하고 이해하는데 걸리는 시간
- 이 문제를 해결하는 코들르 이해하는 데 걸리는 시간

##### 애플리케이션이 완성되는 과정에서 여러가지 일이 생기면서 재검토되고 수정과 변형을 거치게 된다.
- 버그 발견
- 애플리케이션에 새로운 기능 추가
- 애플리케이션이 새로운 환경에서 동작 (새로운 브라우저 출시, 버전 업데이트 등)
- 코드 용도 변경
- 코드를 처음부터 완전히 재작성, 다른 구조, 다른 언어로 옮기게 되었을때!

##### 유지보수 가능한 코드란?
- 읽기 쉽다.
- 일관적이다.
- 예측 가능하다.
- 한 사람이 작성한 것처럼 보인다.
- 문서화되어 있다.

### 2.2 전역 변수 최소화
- 함수를 사용하여 유효범위 관리
- 함수 안에서 선언된 변수는 해당 함수의 지역 변수가 되며, 함수 외부에서 사용X
- 전역 변수란 어떤 함수에도 속하지않고 선언되거나, 아예 선언되지 않은 채로 사용되는 변수를 가르킴.
- 모든 자바스크립트 실행환경에는 전역 객체(Global Object)가 존재
- 어떤 함수에도 속하지 않은 상태에서 this사용 시 전역 객체에 접근
- 전역 객체를 생상하는 것은 전역 객체의 프로퍼티를 만드는것.
- 편의상 브라우저에서는 전역 객체에 window라는 부가적인 프로퍼티가 존재

#### 브라우저 환경에 전역 변수 생성, 이 변수에 접근하는 방법
```javascript
myglobal = 'Hello Jodeng!' // 안티 패턴
console.log(myglobal);
console.log(window.myhlobal);
console.log(window['myglobal']);
console.log(this.myglobal);
```

#### 전역 변수의 문제점
- 전역 변수의 문제점은 자바스크립트의 애플리케이션이나 웹페이지 내 모든 코드 사이드에서 공유된다는 점!
- 모든 전역 변수는 동일한 전역 네임스페이스 안에 존재하기 때문에, 애플리케이션 내의 다른 영역에서 목적이 다른 전역 변수를 동일한 이름으로 정의할 경우 서로 덮어쓰게 된다.
- 웹 페이지에서는 해당 페이지의 개발자가 작성하지 않은 외부 코드를 가져와 삽입하는 일이 종종 있음
    - 서드파티 자바스크립트 라이브러리
    - 광고제휴 업체의 스크립트
    - 사용자를 추적하고 분석하는 서드파티 스크립트 코드
    - 다양한 위젯, 배지, 버튼 등.
- 다른 스크립트들과 한 페이지 안에서 사이좋게 공존하려면, 전역 변수를 최소한으로 사용
- 전역 변수의 갯수를 최소화 하는 전략으로 '네임스페이스 패턴', '즉시 실행 함수' 활용하는 방법이 있음.
- 변수 선언시 항상 var를 사용할 것!
- 선언하지 않고 사용한 변수는 자동으로 전역 객체의 프로퍼티가 되어, 명시적으로선언된 전역 변수와 별차이 없이 사용
    ```javascript
    function sum(x, y) {
        // 안티 패턴 (암묵적 전역)
        result = x + y;
        return result;
    }
    function smart(x, y) {
        var result = x + y;
        return result;
    }
    ```
- 암묵적 전역을 생성하는 또다른 안티패턴은 하나의 var 선언에서 연쇄적으로 살당하는 것.
    ```javascript
    function foo() {
        // 안티패턴. 사용하지 말것. b가 전역으로 남아!
        var a = b = 0;
    }

    function smart() {
        var a, b;
        a = b = 0;
    }
    ```
##### 암묵적 전역 변수를 피해야 하는 이유
- 이식성(portability)
    - 코드를 다른 실행 환경(호스트)에서 실행할 경우, 원래의 실행 환경에는 존재하지 않았던 암묵적 전역 변수가 새로운 실행 환경의 호스트 객체를 의도치 않게 덮어 쓸수 있기 때문에.

#### var 선언을 빼먹었을 때의 부작용
- 암묵적 전역 변수와 var 사용해서 선언한 명시적 선언변수 사이에 차이점은 delete연산자를 사용하여변수의 정의를 취소할 수 있는지 여부!
- var를 사용하여 명시적으로 선언된 전역 변수는 삭제 불가
    - 프로그램 내에서 생성되었지만 함수에는 속하지 않은 변수들
- var를 사용하지 않고 생성한 암묵적 전역변수는 삭제 가능
    - 함수 안에서 생성되었든 아니든 var 사용하지 않고 생성한 암묵적 전역변수!
    - 암묵적 전역변수는 전역 객체의 프로퍼티
    ```javascript
    var global_var= 1;
    global_novar = 2; // 안티 패턴
    (function (){
        global_fromfunc = 3; // 안티패턴
    })();

    delete global_var; // false 삭제 X
    delete global_novar; // true 삭제 O
    delete global_fromfunc; // true 삭제 O

    // 삭제되었는지 확인해보자!
    typeof global_var; // 'number' => 삭제안되었구나!
    typeof global_novar; // undefined
    typeof global_fromfunc; // undefined
    ```

#### 전역 객체에 대한 접근
- 브라우저 어느곳이든 window속성을 통해 전역 객체에 접근!
- window라는 식별자를 직접 사용하지않고 전역 객체에 접근하고 싶다면, 함수 유효범위 안에서다음과 같이 정의하면된다.
```javascript
var global = (function () {
    return this;
})();
```
- 이렇게 하면 항상 전역 객체를 얻을 수 있다.
- 함수를 new와 생성자를 사용해 호출하지 않고그냥 함수로 호출한 경우, 함수 안에서 this는 항상 전역 객체를 가리킨다.
- 라이브러리를 개발하고 있다면 라이브러리 코드를 즉시 실행 함수로감싼 후, 즉시 실행 함수의 인자로 전역 유효범위를 가리키는 this를 전달하는 방법.

#### 단일 var 패턴
- 함수 상단에서 var 선언을 한번만 쓰는 패턴 사용시 이점
    - 함수에서 필요로 하는 모든 지역변수를 한군데서 찾을 수 있다.
    - 변수를 선언하기 전에 사용할 때 발생하는 로직상의 오류를 막아준다.
    - 변수를 먼저 선언한 후에 사용해야 한다는 사실을 상시시키기 때무ㅠㄴ에 전역 변수를 최소화 하는데 도움이 된다.
    - 코드량이 줄어든다.
- 단일 var 패턴
    ```javascript
    function func() {
        var a = 1,
            b = 2,
            sum = a + b,
            myObject = {},
            i, j;
            ...
    }
    ```
    - var 선언하나만 쓰고 여러개의변수를 쉼표로 연결하여 선언.
    - 변수 선언 시 초기 값을 주어 초기화 하는 것이 좋은 습관!
    - 문법 오류 막을 수 있어 (초기값을 설정 안하면 undefined로!)
    - 변수 초기값에 근거해 변수의 용도 확인 가능.
    - 객체를 할당할 변수였는지 정수를 할당할 변수였는지 짐작 가능
- DOM(Document Object Model) 챀조를 할당한 지역 변수들을 하나의 선언문에 모아놓는것도 좋은 예
```javascript
function updateElement() {
    var el = document.getElementById('result'),
        style = el.style;
}
```

#### 호이스팅: 분산된 var 선언의 문제점
- 함수 내 여기저기서 여러개의 var 선언을 사용할수 있지만, 실제로는 모두 함수 상단에서 변수가 선언된 것과 동일하게 동작
- 이러한 동작방식을 '호이스팅(끌어올리기)'이라고 함
- 함수 안에서 변수를 사용한 다음에 선언하면 로직상의 오류를 일으킬 수 있음.
- 동일한 함수 안에 있는 변수는 var 선언 전에 사용해도 이미 선언된 것으로 간주.
    ```javascript
    myname = 'Jodeng'; // 안티패턴
    function func () {
        console.log(`1. ${myname}`); // 1. undefined
        var myname = 'Taz';
        console.log(`2. ${myname}`); // 2. Taz
    }
    func();

    function func2() {
        var myname;
        console.log(`1. ${myname}`); // 1. undefined
        myname = 'Taz';
        console.log(`2. ${myname}`); // 2. Taz
    }
    ```
    - 1. undefined가 뜨는 이유는 myname이 함수의 지역변수로 선언되었다고간주하기때문.

##### 코드는 두단계 거쳐 처리
- 첫번째 단계 : 변수, 함수 선언, 형식 매개변수들이 생성되며 코드를 파싱하고 실행 문맥으로 들어간다.
- 두번째 단계 : 런타임 코드 실행 단계로 함수 표현식과 지정되지 않은 식별자(선언되지 않은 변수)들이 생성

### 2.3 for 루프
- for루프 안에서는 배열, arguments, HTMLCollection 등과 같은 Array-Like Object 순회
    ```javascript
    // 최적화 되지 않은 코드
    for (var i = 0 ; i < myarray.length ; i++) {
        // myarray[i]를 다루는 코드
    }
    ```
    - 위 코드는 루프 순회시 마다 배열의 length에 접근. :<
    - myarray가 배열이 아니라 HTMLCollection이라면 코드가 느려질 수 있음.
- HTMLCollection은 다음과 같은 DOM 메서드에서 반환되는 객체
    - document.getElementsByName()
    - document.getElementsByClassName()
    - document.getElementsByTagName()
    - document.images : 페이지 내 모든 IMG 엘리먼트
    - document.links : 모든 A 엘리먼트
    - document.forms : 모든 form
    - document.forms[0].elements :페이지 내 첫번째 form안의 모든 필드
    
    - 이런것들은 HTML 페이지에 대한실시간 질의라는 점에서 문제가 된다.
    - HTMLCollection의 length 속성에 접근할 때마다 실제 DOM에 질의를요청하는 것과 같으며, DOM접근은 일반적으로 비용이 큼.
    - for루프에서 HTMLCollection에 접근할때는 length 캐시 필요
    ```javascript
    for (var i = 0, len = myarray.length ; i < len ;i++) {
        //...
    }
    ```
    - 이렇게 하면 length 값 한번만 구하고, 루프를 도는 동안에 이 값 사용.
##### for문 두가지 변형 패턴
- 변수 하나를 덜 쓰기 (length값 생략)
- 카운트를 0으로 하여 거꾸로 내려감.
    - 0과 비교하는 것이 배열의 length 또는 0이 아닌 값과 비교하는 것보다 대개 더 빠르기 때문.
- 첫번째 변형 패턴
```javascript
var i, myarray = [];

for (i = myarray.length ; i-- ;) {
    //...
}
```
- 두번째 변형 패턴 (while 루프 사용)
```javascript
var myarray = [],
    i = myarray.length;

while (i--) {
    //...
}
```

### 2.4 for-in 루프
- 배열이 아닌 객체 순회시 사용
- for-in 루프를 도는 것을 '열거(enumeration)'라고 함.
- for-in에서는 프로퍼티를 열거하는 순서가 정해져 있지 않음.
- 배열에는 일반적인 for루프를 사용
- 객체에만 for-in루프 사용
- 객체의 프로퍼티를 순회할 때는 프로토타입 체인을 따라 상속되는 프로퍼티들을 걸러내기위해 hasOwnProperty() 메서드를 사용해야한다.
```javascript
var man = {
    hands: 2,
    legs: 2,
    heads: 1
};

// Object Deep Copy 구현
if (typeof Object.prototype.copy === 'undefined') {
    Object.prototype.copy = function (obj) { 
        return JSON.parse(JSON.stringify(obj));
    }
}

for (var propName in man) {
    // 프로토타입 프로퍼티 걸러낸다.
    if (man.hasOwnProperty(propName)) {
        console.log(`${propName} : ${man[propName]}`);
    }

    /*
    다음과 같이 변경 가능.
     man.hasOwnProperty(propName) =>
     Object.prototype.hasOwnProperty(man, propName);
     이 방식은 man객체가 hasOwnProperty를 재정의하여 덮어썼을 경우 활용.
    */
}

// 안티패턴 hasOwnProperty 사용하지 않았을때!
for (var propName in man) {
    console.log(`${propName} : ${man[propName]}`);
    // man property외에 Object prototype property까지 죄다 열거됨!!!
}

```
- 프로퍼티 탐색이 Object까지 거슬러 올라가지 않게 하려면 지역 변수를 사용하여 hawOwnProperty 메서드 '캐시'해준다.
```javascript
var i, hasOwnProp = Object.prototype.hasOwnProperty;

for (i in man) {
    if (hasOwn.call(man, i)) {
        console.log(`${i} : ${man[i]}`);
    }
}
```

### 2.5 내장 생성자 프로토타입 확장하기 / 확장하지 않기
- 생성자 함수의 prototype 프로퍼티를 확장하는 것은 기능을 추가하는 좋은 방법이지만...
- Object(), Array(), Function()과 같은 내장생성자의 프로토타입을 확장하는 것은 꽤 매력적이다. but,코드의 지속성은 심각하게 저해될 수 있다!
- 다른 개발자들은 대부분 자바스크립트의 내장 메서드가 일관되게 동작하기를 기대하며 어떤 추가 사항을 예상하지는 않음.
- for-in 루프에서 hasOwnProperty()를 사용하지 않았다면 임의로 프로토타입에 추가된 프로퍼티가 튀어나와 혼동될 수 있음.
- 내장 생성자 프로토타입을 확장하지 않는 것이 좋다!

##### 내장 생성자 프로토타입을 확장시키려면 다음 조건을 만족시켜라
1. 해당 기능이 ECMAScript의 향후 버전이나 자바스크립트 구현에서 일관되게 내장 메서드로 구현될 예정일 때.
2. 이 프로퍼티 또는 메서드가 이미 존재하는지, 즉 이미 코드 어딘가에 구현되어 있거나, 지원 브라우저 중 일부 자바스크립트 엔진에 내장되어 있는지 확인
3. 이 변경사항을 명확히 문서화하고 팀 내에서 공유
- 위 세 가지 조건을 만족했다면 다음 패턴으로 내장 생성자프로토타입 확장해라
```javascript
if (typeof Object.prototype.myMethod !== 'function') {
    Object.prototype.myMethod= function () {
        // 구현
    };
}
```

### 2.6 switch 패턴
- 가독성과 견고성 향상
```javascript
var inspect_me = 0, result = '';

switch (inpect_me) {
    case 0:
        result = 'zero';
        break;
    case 1:
        result = 'one';
        break;
    default:
        result = 'unknown';
}
```

### 2.7 암묵적 타입캐스팅 피하기
- 자바스크립트는 변수를 비교할 때 암묵적 타입캐스팅 실행.
- false == 0, ' ' == 0, undefined == null => true 반환
- 암묵적 타입 캐스팅으로 인한 혼동 막기 위해 ===, !== 비교연산자 사용해라.

#### eval() 피하기
- eval is evil.
- 이 함수는 임의의 문자열을 받아 자바스크립트 코드로 실행
- 코드가 런타임에 동적으로 생성해야되는 경우 eval 사용하지말고 좀 더 나은방법 찾아봐!
    ```javascript
    // 안티 패턴
    var property = 'name';
    console.log(eval("obj." + property));

    // 권장안
    console.log(obj[property]);
    ```
- 보안 문제
    - 보안과 유효성을 보장하기 위해서는 브라우저 내장 메서드를 사용하여 JSON 응답을 파싱하는것이 좋다.
    - JSON.parse()를 내장 지원하지 않는 브라우저에서는 JSON.org의 라이브러리 사용
- setInterval(), setTimeout() 사용 시 문자열로 function 넘기지 말고 그냥 function 넘겨라
    ```javascript
    // 안티 패턴
    setTimeout('myFunc()', 1000);
    setTimeout('myFunc(1, 2, 3)', 1000);

    // 권장안
    setTimeout(myFunc, 1000);
    setTimeout(function () {
        myFunc(1, 2, 3);
    }, 1000);
    ```
- new Function() 생성자를 사용하는 것도 eval()과 비슷하기 때문에 신중하게 접근해라.
    - new Function()안에서 평가되는 코드는 지역 함수의 유효범위 안에서 실행되기 때문에 코드 내에서 var로 선언된 변수들이 자동으로 전역 변수가 되지 않음.
- 자동으로 전역 변수가 되지 못하도록 막기 위해 eval() 호출을즉시 실행 함수로 감쌀수도 있어.
```javascript
console.log(typeof un); // undefined
console.log(typeof deux); // undefined
console.log(typeof trois); // undefined

var jsstring = 'var un = 1; console.log(un);';
eval(jsstring); // 1

jsstring = 'var duex = 2; console.log(duex);';
new Function(jsstring)(); // 2

jsstring = 'var trois = 3; console.log(trois);';
(function () {
    eval(jsstring); // 3
})();

console.log(typeof un); // number ===> 전역스페이스 오염되었구나!
console.log(typeof deux); // undefiend
console.log(typeof trois); // undefined
```
- eval()은 그 자신의 바깥쪽 유효범위에 접근하고 수정을 가할수 있는 반면, Function은 그럴 수 없다.
```javascript
(function (){
    var local = 1;
    eval('local = 3; console.log(local);'); // 3
    console.log(local); // 3
})();

(function () {
    var local = 1;
    Function('console.log(typeof local);')(); // undefined
})();
```
### 2.8 parseInt()를 통한 숫자 변환
- parseInt() 사용 시 문자열로부터 숫자 값을 얻을 수 있음.
- 두번째 매개변수로 기수 받음.
- 파싱할 문자열이 0으로 시작할경우 문제 생길 수 있음.
    - ECMASctipt 3에서 0으로 시작하는 문자열은 8진수로 처리되었었음..(ECMAScript 5에서 바뀌었다.!)
- 일관성 없고 예측을 벗어나는 결과를 피하려면 항상 기수 매개변수를 지정해줘라!
    ```javascript
    var month = '08', year = '2018', date = '02';
    console.log(`${year}-${month}-${date}`);
    console.log(`${year}년 ${parseInt(month, 10)}월 ${parseInt(date, 10)}일`);
    ```
- 문자열을 숫자로 변환하는 방법
    - parseInt(문자열, 기수);
    - +"09";
    - Number("09");
    - ~~"09"
- parseInt 방법이 느릴꺼야. 단순히 숫자 변환만 하는게 아니라 파싱을 하는거니깐!
- 그러나 parseInt("08 hello") 하면 8을 얻을 수 있어!
- ~~"08 hello"는 0을 얻을 수 있네!
- +"08 hello" ===> NaN
- Number("08 hello") ===> NaN

### 2.9 코딩 규칙
- 코딩 규칙을 수립하고 준수하는 것이 중요한 이유?
    - 코드의 일관성이 유지되고 예측가능해지며 이해하기가 쉬어지기 때문
    - 새로운 개발자가 팀에 합류했을 때도, 코딩 규칙을 한번 훑어보면 다른 팀원이 작성한 코드에 훨씬 빨리 익숙해질 수 있어.
#### 들여쓰기
- 팀원들이 들여쓰는 스페이스 개수를 2개로 할지 4개로 할지 정하면 된다.
- 중괄호 안에 있으면 들여써라.
##### 어떨때 들여쓸까?
- 함수의 본문
- 루프(do, while, for, for-in)
- if, switch문
- 객체 리터럴 표기법을 사용한 객체 프로퍼티
#### 중괄호
- 중괄호는 생략할 수 있을 때도 항상 써야한다.
- if나 for문에 명령문이 한줄 뿐일 경우 중괄호 생략가능하지만, 써줘라!
- 코드에 일관성을 유지할 수 있고 수정도 쉬워져.
#### 여는 중괄호의 위치
- 여는 중괄호를 같은 줄에 둘지, 다음 줄에 둘지에 대해 개발자들마다 선호도 다 틀려!
- 취향문제 일 수도있지만, 중괄호의 위치에 따라 프로그램의 동작이 달라질 수도 있어!
    - 세미콜론 삽입 장치 때문
    - 함수의 반환 값이 객체 리터럴이고 이 객체의 여는 중괄호가 다음행에 올 경우 문제를 일으킨다.
    ```javascript
    function func() {
        return 
        {
            name: 'Jodeng'
        };
    }
    ```
    - 위 처럼 하면 func()호출시 반환값은 undefined이다. 
        - 자바스크립트는 까다롭지 않아서 세미콜로을 쓰지 않고 행을 종료하면 알아서 대신 세미콜론을 추가해줌.
        - return ; <==== 이렇게 되는거임. 더 정확히는 return undefined;하고 함수 호출 시 실행이 끝나면서 뒤에 코드가 더이상 실행되지 않음.
- 항상 중괄호 쓰고, 여는 중괄호는 선행하는 명령문과 동일한 행에 두자!
    ```javascript
    function func() {
        return {
            name: 'Jodeng'
        };
    }
    ```
##### 세미콜론은 빼먹지말고 꼭 붙여라!
- 자바스크립트 파서가 대신해줄 수이는 경우지만 코드에 대한 좀 더 엄격한 접근과 규츌 장려.
#### 공백
- 공백을 활용하는 것은 가독성과 코드의 일관성을 향상시킬 수 있다.
- 표현식을 열거할 때 쉼표를 쓸 자리에 공백을 넣어라.
- 다음과 같은 위치에 공백을 쓰면 좋다!
    - for 루프의 구성 요소를 분리하는 세미콜론 다음.
        - for (var i =0; i < 10; i += 1) { ... }
    - for 루프 내에서 여러 개의 변수(i와 max)를 초기화한 다음.
        - for (var i = 0, max = 10; i < max; i += 1) { ... }
    - 배열의 원소들을 분리하는 쉼표 다음.
        - var a = [1, 2, 3];
    - 객체의 프로퍼티를 분리하는 쉼표 다음, 프로퍼티의 값을 분리하는 콜론 다음
        - var o = {a: 1, b: 2};
    - 함수의 인자들을 분리할 때
        - myFunc(a, b, c);
    - 함수를 정의하는 중괄호 전
        - function myFunc() {}
    - 익명 함수 표현식에서 function 다음
        - var myFunc = function () {};
    - 모든 연산자와 피연산자를 스페이스로 분리
        - +, -, *, =, <, >, <=, >=, ===, !==, &&, ||, += 등
    - 함수, if-else문, 루프, 객체 리터럴의 여는 중괄호 { 전
    - 닫는 중괄호 } 와 else 또는 while의 사이 
- 공백 사용 시 늘어나는 파일 크기는 압축을 통해 해결하자!

### 2.10 명명 규칙
#### 생성자를 대문자로 시작하기
#### 단어 구분
#### 그 외의 명명 패턴

### 2.11 주석 작성
### 2.12 API 문서 작성
#### YUIDoc 예제
### 2.13 독자를 위한 문서 작성
### 2.14 동료 리뷰
### 2.15 출시 단계의 압축
- 자바스크립트 코드에서 공백, 주석 및 기타 중요하지 않은 부분들을 삭제함으로써 서버에서 브라우저로 전송되는 파일 크기를 감소시킴.
- 페이지 로딩 속도 개선
- 압축 도구는 공백, 줄바꿈, 주석 등을 제거
- 압축 도구는 지역 변수명만 변경
- DOM 참조와 같은 전역 변수를 함수 내에서 두번 이상 사용한다면 지역 변수에 할당하라.
- 압축률이 향상되고 코드가 더 빨리 다운로드 됨
- 변수명을 탐색하는 시간도 줄어들기 떄문에 런타임의 코드 실행 속도도 개선.

### Lint 실행
- 실행되지 않는 코드
- 변수를 정의하기전에 사용한 경우
- 불안전한 UTF문자
- void, with, eval을 사용한 경우
- 정규식 내에서 부적절하게 이스케이프한 문자

## Chapter 3
- 자바스크립트의 리터럴 표기법 패턴을 사용하면 좀더 정확하고 표현력이 풍부하면 서도 에러율은 낮은 방식으로 객체를 정의할 수 있다.
- Object, Array, RegExp 등의 리터럴을 다룸.
- Object() 나 Array()등의 내장 생성자 함수에 비해 리터럴 표기법을 쓰는게 더 좋음.

### 3.1 객체 리터럴
- 자바스크립트에서 '객체'라고 하면 단순히 이름-값 쌍의 해시 테이블을 생각하면돼~!
- 원시 데이터 타입과 객체 모두 값이 될 수 있음.
- 함수도 값이 될 수 있으며 이런 함수는 메서드라고 부름.
- 자바스크립트에서 생성한 객체(사용자가 정의한 네이티브 객체)는 언제라도 변경 가능하며 내장 네이티브 객체의 프로퍼티들도 대부분 변경이 가능
- 빈 객체를 정의해놓고 기능을 추가해 나갈 수 있다.

```javascript
// 빈 객체에서 시작
var person = {};

// 프로퍼티 하나를 추가한다.
person.name = 'Jodeng';

// 메서드도 추가해보자!
person.getName = function () {
    return person.name;
};

// 프로퍼티와 메서드 값을 변경 가능
person.getName = function () {
    return 'Taz';
};

// 프로퍼티나 메서드를 삭제
delete person.name;

// 다른 프로퍼티나 메서드 추가
person.gender = 'female';
person.sayHello = function () {
    console.log('Hello');
};
```
- 반드시 빈 객체에서 시작안해도돼!
- 객체 리터럴 표기법을 쓰면 생성 시점에 객체에 프로퍼티 추가 가능
```javascript
var person = {
    name: 'Jodeng',
    getName: function () {
        return this.name;
    }
};
```
#### 객체 리터럴 문법
- 중괄호 { } 로 감싼다.
- 객체 내의 프로퍼티와 메서드를 쉼표(,)로 분리
- 마지막 key-value 쌍 뒤에 쉼표가 들어가면 IE에서는 에러 발생
- 프로퍼티명(key)과 프로퍼티 값(value)은 콜론으로 분리
- 객체를 변수에 할당할 때는 닫는 중괄호 뒤에 세미콜론을 뺴먹지 않도록 하자.

#### 생성자 함수로 객체 생성하기
- 객체를 생성할 때는 직접 만든 생성자 함수를 사용할 수 있음.
- Object(), Date(), String()등 내장 생성자 사용.
```javascript
// 객체를 생성하는 두 가지 방법
// 첫 번째 방법 - 리터럴 사용
var car = {goes: 'far'};

// 두 번째 방법 - 내장 생성자 사용 (안티패턴)
var car = new Object();
car.goes = 'far';
```
- 리터럴 표기법을 사용하면 유효범위 판별 작업도 발생하지 않는다.(?)
- 생성자 함수를 사용했다면 지역 유효 범위에 동일한 이름의 생성자가 있을 수 있기 때문에 Object()를 호출한 위치에서부터 전역 Object생성자 까지 인터프리터가 쭉 거슬러 올라가며 유효범위 검색

#### 객체 생성자의 함정
```javascript
// 모두 안티패턴이야!

// 빈 객체
var empty = new Object();
console.log(empty.constructor === Object); // true

// 숫자 객체
var num = new Object(1);
console.log(num.constructor === Number); // true
console.log(num.toFixed(2)); // "1.00"

// 문자열 객체
var str = new Object('I am a String.');
console.log(str.constructor === String); // true
console.log(typeof str.substring); // 'function'

// 불린 객체
var bool = new Object(true);
console.log(o.constructor === Boolean); // true
```
- 런타임에 결정하는 동적인 값이 생성자에 인자로 전달될 경우 예기치 못한 결과 반환 될 수 있어.
- 결론적으로 new Object()는 사용하지 마라.

### 3.2 사용자 정의 생성자 함수
```javascript
var Person = function (name) {
    this.name = name;
    this.say = function () {
        return `I am ${this.name}`;
    };
};

var jodeng = new Person('Jodeng');
jodeng.say(); // 'I am Jodeng'
```
- new와 함꼐 생성자 함수를 호출하면 함수 안에서 다음과 같은 일이 일어난다.
    - 빈 객체 생성. 이 객체는 this라는 변수로 참조할 수 있고, 해당 함수의 프로토타입을 상속받는다.
    - this로 참조되는 객체에 프로퍼티와 메서드가 추가됨.
    - 마지막에 다른 객체가 명시적으로 반환되지 않을 경우, this로 참조된 이 객체가 반환
    ```javascript
    var Person = function (name) {
        // 객체 리터럴로 새로운 객체 생성
        // var this = {}; ======> var this = Object.create(Person.prototype);

        // 프로퍼티와 메서드 추가
        this.name = name;
        // new Person()를 호출할 때마다 메모리에 새로운 함수 생성 => 비효율적이니깐 prototype에 추가하자.
        this.say = function () {
            return `I am ${this.name}`;
        };

        // this 반환
        // return this;
    };

    Person.prototype.say = function () {
        return `I am ${this.name}`;
    };
    ```
#### 생성자의 반환 값
- 생성자 함수를 new와 함께 호출하면 항상 객체가 반환.
- 함수 내에 return 문을 쓰지 않았더라도 생성자는 암묵적으로 this 반환
- 반환 값이 될 객체를 따로 정할 수도 있어.
```javascript
var Objectmaker = function () {
    this.anme = 'This is it!';

    var that = {};
    that.name = 'And That\'s That';
    return that;
};

var o = new Objectmaker();
console.log(o.name);
```
- 생성자는 어떤 객체라도 반환
- 객체가 아닌 문자열이나 false등을 반환하려고 시도하면, 에러가 발생하진 않지만 그냥 무시되고 this에 의해 참조된 객체가 대신 반환

### 3.3 new를 강제하는 패턴
- 생성자 호출 시 new를 빼먹으면 어떻게 될까?
- 문법 오류나 런타임 에러가 발생하지는 않지만, 논리적인 오류가 생겨 예기치 못한 결과가 나올 수 있음.
- new를 빼먹으면 생성자 내부의 this가 전역 객체를 가리키게 되기 때문
- 브라우저에서라면 this가 window를 가리키게 됨.
- 생성자 내부에 this.member와 같은 코드가 있을 때 이 생성자를 new없이 호출 하면, 실제로는 전역 객체에 member라는 새로운 프로퍼티가 생성됨.
- 이 프로퍼티는 window.member 또는 member를 통해 접근할 수 있다.
- 전역 네임스페이스는 항상 꺠끗하게 유지해야해~~!
```javascript
// 생성자
function Waffle() {
    this.tastes = 'yummy';
}

// 새로운 객체
var good_morning = new Waffle();
console.log(typeof good_morning);
console.log(good_morning.tastes);

// 안티패턴: 'new'를 빼먹었다.
var good_morning2 = Waffle();
console.log(typeof good_morning2); // undefined
console.log(window.tastes); // 'yummy'
```
#### 명명 규칙
#### that 사용
#### 스스로를 호출하는 생성자
### 3.4 배열 리터럴
#### 배열 리터럴 문법
#### 배열 생성자의 특이성
#### 배열인지 판별하는 방법
### 3.5 JSON
#### JSON 다루기
### 3.6 정규 표현식 리터럴
#### 정규 표현식 리터럴 문법
### 3.7 원시 데이터 타입 래퍼
### 3.8 에러 객체
