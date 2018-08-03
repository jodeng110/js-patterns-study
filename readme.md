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
```javascript
function Waffle() {
    if (!(this instanceof Waffle)) {
        return new Waffle();
    }

    this.tastes = 'yummy';
}
```
### 3.4 배열 리터럴
```javascript
// 안티 패턴
var a = new Array('Jodeng', 'Taz', 'BeomGeon');

// 권장 (배열 객체 리터럴 문법)
var b = ['Jodeng', 'Taz', 'BeomGeon'];

console.log(a, b);
console.log(`typeof a : ${typeof a}`); // object
console.log(`typeof b : ${typeof b}`); // object
console.log(`a.constructor === Array : ${a.constructor === Array}`); // true
console.log(`b.constructor === Array : ${b.constructor === Array}`); //true
```
#### 배열 리터럴 문법
- 각 원소는 쉼표로 분리, 전체 목록을 대괄호로 감쌈.
    - ex) arr = ['Jodeng', 'Taz', 'BeomGeon'];
- 직관적이고 우아함.
#### 배열 생성자의 특이성
- new Array()를 피해야하는 이유?
    - 생성자가 품고 있는 함정을 피하기 위해서!
    - Array() 생성자에 숫자 하나를 전달할경우, 이 값은 배열의 첫 번째 원소 값이 되는게 아니라 배열의 길이를지정.
        - new Array(3) 은 배열 길이가 3이고 실제 원소 값은 가지지 않음.
        - 원소가 존재하지 않기 때문에 어느원소에 접근하든 undefined
        ```javascript
        // 한 개의 원소를 가지는 배열
        var c  = [3];
        console.log(c.length); // 1
        console.log(c[0]); // 3

        // 세 개의 원소를 가지는 배열
        var d = new Array(3);
        console.log(d.length); // 3
        console.log(d[0], d[1], d[2]); // undefined undefined undefined
        ```
    - new Array()에 정수가 아닌 부동 소수점을 전달하면 예상밖의 결과 나와.
        - 부동 소수점은 배열의 길이로 유효한 값이 아니기 때문에 에러 발생
        ```javascript
        // 리터럴 사용
        var e = [3.14];
        console.log(a[0]);

        var f = new Array(3.14);
        console.log(typeof f); // Uncaught RageError : Invalid array length
        ```
    - 런타임에 동적으로 배열을생성할 경우 에러 발생을 피하려면 배열의 리터럴표기법을 쓰는것이 안전해!
#### 배열인지 판별하는 방법
- 배열에 typeof 연산자 사용하면 'object'가 반환
    ```javascript
    console.log(typeof [1, 2, 3]); // object
    ```
- intanceof Array : IE 일부 버전에서 프레임간 사용시 올바르게 동작 X
- ECMAScript 5 Array.isArray() 메서드 사용
    ```javascript
    console.log(Array.isArray([])); // true 반환

    console.log(Array.isArray({
        length: 1,
        '0': 1,
        slice: function () {
            // slice 구현
        }
    })); // false 반환
    ```
- 배열에 toString() 호출
    - 배열이면 [object Array]
    - 객체이면 [object Object]]
    ```javascript
    var toString= Object.prototype.toString;

    console.log([1, 2, 3].toString()); // 1,2,3
    console.log(Object.prototype.toString.call(new Array())); // [object Array]
    console.log({name: 'jodeng', gender: 'female'}.toString()); // [object Object]

    console.log(toString.call([])); // [object Array]
    console.log(toString.call(new Date)); // [object Date]
    console.log(toString.call(new String)); // [object String]
    console.log(toString.call(Math)); // [object Math]
    console.log(toString.call(undefined)); // [object Undefiend]
    console.log(toString.call(null)); // [Object Null]
    ```
- 배열 판별 메소드 직접 작성
    ```javascript
    if (typeof Array.isArray ==='undefined') {
        Array.isArray = function (arg) {
            return Object.prototype.toString.call(arg) === '[object Array]';
        };
    }
    ```

### 3.5 JSON (Javascript Object Notation)
- 데이터 전송형식의 일종
- JS 뿐만아니라 여러 다른언어에서도 가볍고 편리하게 사용 가능
- 배열과 객체 리터럴 표기법의 조합
    ex) {"name": "value", "some": [1, 2, 3]}
- JSN 문자열에 함수나 정규식 리터럴 사용 X
#### JSON 다루기
- JSON.parse() : JSON문자열을 객체 또는 배열로 파싱
    ```javascript
    // 입력되는 JSON 문자열
    var jstr = '{"mykey": "my value"}';

    // 안티 패턴
    var data = eval('(' + jstr + ')');

    // 권장안
    var smart = JSON.parse(jstr);
    console.log(smart, smart.mykey); // "my value"
    ```
- JSON.stringify() : 객체 또는 배열을 인자로 받아 JSON문자열로 직렬화
    ```javascript
    var dog = {
        name: 'Pori',
        dob:new Date(),
        legs: [1, 2, 3, 4]
    };

    var jsonstr = JSON.stringify(dog);

    console.log(jsonstr);
    ```
### 3.6 정규 표현식 리터럴
- JS에서 정규표현식(Regular Expression, 정규식)은 객체!
- 정규식을 생성하는 방법 두가지
    - new RegExp() 생성자 사용
        - 따옴표나 역슬래시 등을 이스케이프
        ```javascript
        var re1 = new RegExp("\\\\", "gm");
        ```
    - 정규식 리터럴 사용
        - 짧고 쓰기 편함.
        ```javascript
        var re2 = /\\/gm;
        ```
#### 정규 표현식 리터럴 문법
- 정규식 패턴은 슬래시(/)로 감싼다.
- 두번째 슬래시뒤에 따옴표 없이 문자형태의 변경자 지정
    - g : 전역 매칭
    - m : 여러 줄 매칭
    - i : 대소문자 구분 없이 매칭
- 여러개를 함께 써도돼 ex) var re = /pattern/gmi;
- 정규식 리터럴을 사용하면 정규식 객체로 인자로받는 String.prototye.replace와 같은 메서드 호출 시 좀더 정확한 코드 작성
    ```javascript
    var no_letters = "abc123XYZ".replace(/[a-z]/gi, "");
    console.log(no_letters); // 123
    ```
- 매칭시킬 패턴을 미리 알 수 없고, 런타임에 문자열로 만들어지는 경우 new RegExp() 사용
- RegExp() 생성자 호출 시 new를 빼먹더라도 new를 붙여 호출한것처럼 동작!

##### 정규식 리터럴 vs 생성자(new RegExp())
- 정규식 리터럴의 경우 파싱될 때 단 한번만 객체 생성
- 루프안에 동일한 정규식을 생성하면 이미 생성된 객체가 반환되며 lastIndex등 모든 프로퍼티는 최초에 설정된 상태를 이어받음.(?)
```javascript
function getRE() {
    var re = /[a-z]/;
    re.foo = 'bar';
    return re;

}

var reg = getRE(),
    re2 = getRE();

console.log(reg === re2); // false
reg.foo = 'baz';
console.log(reg.foo);// baz
console.log(re2.foo); // bar
```
### 3.7 원시 데이터 타입 래퍼
- JS Primitive(원시형) Data Type : String, Boolean, Number, Null, Undefined, Symbol
- String, Boolean, Number는 원시 데이터 타입 래퍼라 불리는 객체를 가지고 있음.
- 이 객체 래퍼는 각각 내장 생성자인 Number(), String(), Boolean()을 사용하여 생성
```javascript
// 원시 데이터 타입 숫자
var n = 100;
console.log(typeof n); // 'number'

// 숫자 객체
var nObj = new Number(100);
console.log(typeof nObj); // 'object'
```
- 래퍼 객체이는 유용한 프로퍼티와 메서드들이 들어 있음.
    - Number에는 toFixed(), toExponential() ...
    - String에는 substring(), charAt(), tp:pwerCase() 같은 메서드와 length 프로퍼티 존재
    - 원시 데이터 타입그대로 써도 래퍼 객체의 메서드를 활용 가능!!
        - 메서드를 호출하는 순간 내부적으로 원시 데이터 타입 값이 객체로 임시 변환되여 객체처럼 동작하기 때문이지~!
        ```javascript
        // 원시 데이터 타입 문자열을 객체로 사용
        var s = 'hello';
        console.log(s.toUpperCase()); // HELLO

        // 값 자체만으로도 객체처럼 동작 가능
        console.log('monkey'.slice(3,6)); // 'key'

        // 숫자도 마찬가지
        console.log((22 / 7).toPrecision(3)); // 3.14
        ```
- 원시 데이터 타입 값도 언제든 객체처름 쓸 수 있기 때문에 장황한 래퍼 생성자를 쓸 필요 X
    ```javascript
    // 안티 패턴
    var s = new String('my string');
    var n = new Number(101);
    var b = new Boolean(true);

    // 권장안
    var s = 'my string';
    var n = 101;
    var b = true;
    ```
- 값을 확장하거나 상태를 지속시키기 위해 래퍼 객체를 쓰는 경우도 있어!
    - 원시 데이터 타입은 객체가 아니기 때문에 프로퍼티 추가, 확장할 수 없거든!
    ```javascript
    // 원시 데이터 타입 문자열
    var greet = 'Hello there';

    // split() 메서드를 쓰기 위해 원시 데이터 타입이 객체로 변환
    console.log(greet.split(' ')[0]); // 'Hello'

    // 원시 데이터 타입에 확장을 시도 할 경우 에러는 발생하지 않는다.
    greet.smile = true;

    // 그러나 실제로 동작 X
    console.log(typeof greet.smile); //undefiend

    var greet2 = new String('Hello Jodeng!');
    greet2.isSmile = true;
    console.log(greet2.isSmile); // isSmile 프로퍼티 추가됨!
    ```
- new를 빼먹고 래퍼 생성자를 사용하면, 래퍼 생성자가 인자를 원시 데이터타입의 값으로 변환
    ```javascript
    console.log(typeof Number(1)); // number
    console.log(typeof Number("1")); // number
    console.log(typeof Number(new Number())); // number
    console.log(typeof String(1)); // string
    console.log(typeof Boolean(1)); // boolean
    ```
### 3.8 에러 객체
- Error(), SyntaxError(), TypeError() 등 여러가지 에러 생성자가 내정되어 있고 throw문과 함께 사용.
- name, message 프로퍼티 가짐.
- 이 외에도 에러가 발생한 행 번호와 파일명 등다른 프로퍼티들도 있을 수 있지만, 추가적인 프로퍼티들은 브라우저별로 일관성 없이 구현된 확장 기능이기 때문에 믿고 쓰기 무리.
- throw문은 어떤 객체와 함꼐 사용 가능
     - 반드시 에러 생성자를 통해 객체를 생성해야 하는 것은 아니고 직접 정의해서 (name, message prop을 가진) 정의한 객체를 던질 수 있음.
- Error 생성자도 new를 빼먹고 호출해도 new를 써서 호출한것과 동일한 동작
```javascript
try {
    // 에러 발생
    throw {
        name: 'MyErrorType',
        message: 'oops',
        extra: 'This was ratherembarrassing',
        remedy: genericErrorHandler // 에러를 처리할 함수
    };
} catch (e) {
    // 사용자한테 공지
    console.error(e.message); // oops
    e.remedy(); // genericErrorHandler() 호출
}
```

## Chapter 4 - 함수
### 4.1 배경 지식
##### 자바스크립트의 함수를 특별하게 만든느 두가지
- 1. 함수는 일급(first-class) 객체다!
- 2. 함수는 유효범위(scope)를 제공한다!
##### 함수의 특징?
- 런타임, 즉 프로그램 실행 중에 동적으로 생성할 수 있다.
- 변수에 할당할 수 있고, 다른 변수에 참조를 복사할 수 있으며, 확장 가능하고, 몇몇 특별한 경우를 제외하면 삭제할 숭 ㅣㅆ다.
- 다른 함수의 인자로 전달할 수 있고, 다른 함수의 반환 값이 될 수 ㅣㅇㅆ다.
- 자기 자신의 프로퍼티와 메서드를 가질 수 있다.

- 함수는 하나의 객체
    ```javascript
    // 안티패턴! 데모의 목적으로만 사용해라
    var add = new Function('a, b', 'return a + b');
    add(1, 2); // 3
    ```
    - Function () 생성자의 사용은 eval() 만큼이나 안좋아!
    - 코드가 문자열로 전달되어 평가되기 때문.
    - 따옴표를 이스케이프 해야하고, 가독성도 떨어져!
- 함수가 유효범위(scope)를 제공!
    - 어떤 변수이건 함수 내에서 var로 정으되면 지역변수이고 함수 밖에서는 참조X
    - {} 중괄호 지역유효범위 X
        - if, for, while문 내에서 var로 정의해도 이건 if나 for의 지역변수가 아님.
    - 감싸는함수가 없으면 전역변수가 된다...
#### 용어 정리
- 기명 함수 표현식
    ```javascript
    var add = function add(a, b) {
        return a + b;
    };
    ```
- 무명 함수 표현식(= 함수 표현식, = 익명 함수)
    ```javascript
    var add = function (a, b) {
        return a + b;
    };
    ```
- 함수 선언문
    ```javascript
    function add(a, b) {
        return a + b;
    }
    ```
#### 선언문 vs 표현식 : 이름과 호이스팅
```javascript
// 함수 표현식을 callMe 함수의 인자로 전달
callMe(function () {
    // 이 함수는 무명 함수(익명 함수) 표현식
});

// 기명 함수 표현식을 callMe 함수의 인자로 전달
callMe(function me() {
    // 이 함수는 'me'라는 기명 함수 표현식
});

// 함수 표현식을 객체의 프로퍼티로 저장
var myobject = {
    say: function () {
        // 이 함수는 함수 표현식이다.
    }
};
```
- 함수 선언문은 전역 유효범위나다른함수의 본문내부, 즉 '프로그램 코드'에서만 쓸 수 있다.
- 함수 선언문은 변수나 프로퍼티에 할당 할수 없고, 함수 호출 시 인자로 함수를 넘길때도 사용할 수 없다.
- 언제 함수 선언문을 사용할 수 있을까?
    ```javascript
    // 전역 유효범위
    function foo () {
        function local () {
            function bar () {}

            return bar;
        }
    }
    ```
#### 함수의 name 프로퍼티
```javascript
function foo() {}
var bar = function () {};
var baz = function baz() {};

console.log(foo.name); // foo
console.log(bar.name); // Chrome : bar (IE, FireFox, Webkit에서는 undefined)
console.log(baz.name); // baz
```
- 디버거 할때 유용
- name 프로퍼티는함수 내부에서자신을 재귀적으로 호출할 때 사용.
#### 함수 호이스팅
- 모든 변수는 함수 본문어느 부분에서 선언 되더라도 내부적으로 함수의 맨 윗줄로 끌여올려(hoist)) 진다.
- 함수 또한 결국 변수에할당되는 객체이기때문에 동일한 방식이 적용.
- 함수 선언문은 함수 정의 자체도 호이스팅 된다.
```javascript
// 안티패턴 - 데모를 위해 사용한것

// 전역 변수
function foo() {
    console.log('global foo()');
}
function bar() {
    console.log('global bar()');
}

function hoistMe() {
    console.log(typeof foo);
    console.log(typeof bar);

    foo();
    bar(); // TypeError: bar is not a function

    // 함수 선언문
    function foo() {
        console.log('local foo()');
    }

    var bar = function () {
        console.log('local bar()');
    }; 

}

hoistMe();
```
### 4.2 콜백 패턴
- 함수는 객체다.
- 함수를 다른 함수에 인자로 전달 할 수 있다.
```javascript
function writeCode(callback) {
    // 어떤 작업 수행
    console.log('[writeCode]호출');
    callback();
}

function introduceBugs() {
    console.log('[call instruduceBugs]');
}

writeCode(introduceBugs); // 괄호를 붙이면 함수가 실행되는 괄호 안붙이면 함수의 참조만 전달.
```
#### 콜백 예제
- DOM 트리를 탐색해 필요한 엘리먼트의 배열을 반환
```javascript
var findNodes = function (callback) {
    var i = 100000,
        nodes = [],
        found;

    // callbak 함수를 호출하룻 있는지 확인
    if (typeof callback !== 'function') {
        callback = false;
    }

    while (i) {
        i -= 1;

        // 여기서 콜백을 실행한다.
        if (callback) {
            callback(found);
        }

        nodes.push(found);
    }
    return nodes;
};
/*
var hide = function (nodes) {
    var i = 0, max = nodes.length;
    for (; i < ma; i += 1) {
        nodes[i].style.display = 'none';
    }
}

hide(findeNodes);
*/
var hide = function (node) {
    node.style.display = 'none';
};

findNodes(hide);
```
#### 콜백과 유효범위
- 만약 콜백 메서드가 자신이 속했있는 객체를 참조하기 위해 this를 문제 발생!
```javascript
var myapp = {};
myapp.color = 'green';
myapp.paint = function (node) {
    node.style.color = this.color;
};


var findeNodes = function (callback) {
    //...
    if (typeof callback === 'function') {
        callback(found);
    }
    //...
}

findNodes(myapp.paint); // this.color 문제 발생 (this 참조가...흠..) 
```
- findNodes(myapp.paint)를 호출하면 this.color가 정의되지 않아 정상적으로 동작X
- 이 문제를 해결하기 위해 콜백함수와 콜백이 속해 있는 객체를 전달한다.
```javascript
findNodes(myapp.paint, myapp);

var findNodes = function (callback, context) {
    //...
    if (typeof callback === 'function') {
        callback.call(context, found);
    }
    //...
};

findNodes(myapp.paint, myapp);
findNodes('paint', myapp);

var findNodes = function (callback, context) {
    if (typeof callback === 'string') {
        callback = context[callback];
    }

    if (typeof callback === 'function') {
        callback.call(context, found);
    }
};
```
#### 비동기 이벤트 리스너
- 대부분의 클라이언트 측 브라우저 프로그래밍은 이벤트 구동(event-driven)방식이다.
- 페이지의 로딩이 끝나면 load 이벤트를 발생시킨다.
#### 타임아웃
- 브라우저의 window객체에 의해 제공되는 타임아웃 메서드들
    - setTimeout(), setInterval()
```javascript
var thePlotThickens = function () {
    console.log('500ms later...');
};
setTimeout(thePlotThickens, 500);
```
- thePlotThickens가 괄호없이 변수로 전달되었다.
- 이 함수를 곧바로 실행하지 않고 setTimeout이 나중에 호출할 수 있도록 함수를 가리키는 포인터만 전달

#### 라이브러리에서의 콜백
- 소프트웨어 라이브러리에 들어갈 코드는 가능한 범용적이고 재사용할 수 있어야한다.
- 핵심 기능에 집중하고 콜백의 형태로 hook을 제공해라!
### 4.3 함수 반환하기
- 일회적인 초기화 작업을 수행한 후 반환 값을 만든다. 반환 값은 실행 가능한 함수
    ```javascript
    var setup = function () {
        console.log(1);
        return function () {
            console.log(2);
        }
    };

    var my = setup();
    my();
    var my2 = setup();
    my2();

    my();
    ```
    - setup()은 반환된 함수를 감싸고 있기 때문에 클로저 생성
    - 클로저는 반환되는 함수에서는 접근할 수 있지만 코드 외부에서는 접근할 수 없기 때문에, 비공개 데이터 저장을 위해 사용할 수 있다.
    ```javascript
    var counting = function () {
        var count = 0;
        return function () {
            return (count += 1);
        };
    };

    var next = counting();
    console.log(next()); // 1
    console.log(next()); // 2
    console.log(next()); // 3
    console.log(next()); // 4
    console.log(next()); // 5
    console.log(next()); // 6
    ```
### 4.4 자기 자신을 정의하는 함수
```javascript
var scareMe = function () {
    console.log('Boo!');
    scareMe = function () {
        console.log('double Boo!');
    };
};

scareMe(); // Boo!
scareMe(); // double Boo!
```
- 함수가 어떤 초기화 준비 작업을 단 한 번만 수행할 경우 유용
- 불필요한 작업을 반복할 이유가 없기 때문에 함수의 일부는 더 이상 쓸모X
- 함수가 자기 자신을 재정의하여 구현 내용을 갱신
- Lazy function definition 이라고 불리는데 최초 사용 시점 전까지 함수를 완전히 정의하지 않고 있다가 호출된 이후에는 더 게을러져서 더 적게 일하기 때문에!
- 단점은 자기 자신을 재정의한 이후에는 이전에 원본 함수에 추가했던 프로퍼티들을 모두 찾을 수 없다는 점.
- 또 다른 단점은, 함수가 다른 이름으로 사용된다면, 예를 들어 변수가 할당되거나, 객체의 메서드로써 사용되면 재정의된 부분이 아니라 원본 함수의 본문이 실행된다.
- scareMe()를 일급 객체로 사용하는 예
    - 1. 새로운 프로퍼티 추가
    - 2. 함수 객체가 새로운 변수에 할당
    - 3. 함수는 메서드로써도 사용
    ```javascript
    // 1. 새로운 프로퍼티 추가
    scareMe.property = 'properly';

    // 2. 다른 이름으로 할당
    var prank = scareMe;

    // 3. 메서드로 사용한다.
    var spooky = {
        boo: scareMe
    };

    // 새로운 이름으로 호출
    prank();
    prank();
    console.log(prank.property);

    // 메서드 호출
    spooky.boo();
    spooky.boo();
    console.log(spooky.boo.property);

    // 자기 자신을 재정의한 함수 사용
    scareMe();
    scareMe();
    console.log(scareMe.property);
    ```
### 4.5 즉시 실행함수
- 함수가 선언되자 마자 실행되도록 하는 문법
```javascript
(function () {
    console.log('Watch out!');
})();
```
- 즉시 실행 함수 패턴
    - 함수를함수 표현식으로 선언한다.(함수 선언문으로는 동작X)
    - 함수가 즉시 실행될 수 있도록 마지막에 괄호쌍을 추가
    - 전체 함수를 괄호로 감싼다. (함수를 변수에 할당하지 않을 경우에만 필요하다.)
- 이 패턴은 초기화 코드에 유효범위 샌드박스를 제공한다는 점에서 유용
    - 페이지 로드가 완료된 후, 이벤트 핸들러를 등록하거나 객체를 생성하는등의 초기 설정 작업을 해야한다.
    - 이 모든 작업은 단 한번만 실행되기 때문에 재사용하기 위해 이름이 지정된 함수를 생성할 필요가 없다.
    - 초기화 단계가 완료될때까지만 사용할 임시변수들이 필요하다.
- 즉시 실행 함수는 모든 코드를 지역 유효범위로 감싸고 어떤 변수도 전역 유효범위로 새어나가지 않게 한다.
    ```javascript
    (function () {
        var days = ['일', '월', '화', '수', '목', '금', '토'],
            today = new Date(),
            msg = `오늘은 ${today}, ${days[today.getDay()]}요일 입니다.`;

        console.log(msg);
    })();
    ```
#### 즉시 실행함수의 매개변수
```javascript
(function (who, when) {
    console.log(`나는 ${who}님을 ${when}에 만났어용!`);
})('조뎅', new Date());
```
- 즉시 실행 함수 내에서 window를 사용하지 않고도 전역 객체에 접근할 수 있다.
    - 브라우저 외의 실행환경에서도 코드를 공통으로 사용 가능
    ```javascript
    (function (global) {

    })(this);
    ```
#### 즉시 실행함수의 반환 값
- 즉시 실행 함수의 유효범위를 사용해 특정 데이터를 비공개 상태로 저장하고, 반환되는 내부 함수에서만 접근하도록 할 수 있다.
- 즉시 실행 함수가 함수를 반환하고 이 반환값이 getResult라는 변수에 할당된다. 
    - 이 함수는 즉시 실행 함수에서 미리 계산하여 클로저에 저장해 둔 res라는 값을 반환한다.
    ```javascript
    var getResult = (function () {
        var res = 2 + 2;
        return function () {
            return res;
        }
    })();
    ```
```javascript
var o = {
    message: (function () {
        var who = 'me',
            what = 'call';
        return what + ' ' + who;
    })(),
    getMsg: function () {
        return this.message;
    }
};

console.log(o.getMsg()); // call me
console.log(o.message); // call me
```
- 어떤 객체의 프로퍼티가 객체의 생명주기 동안에는 값이 변하지 않고, 처음에 값을 정의할 때는 적절한 계산을 위한작어이 필요하다.
- 그렇다면 이 작업을 즉시 실행 함수로 감싼 후, 즉시 실행 함수의 반환 값을 프로퍼티 값으로 할당하면 된다.
#### 장점과 사용 방법
- 선언됨과 동시에 실행
- 선언된 모든 변수는 스스로를 호출하는 함수의 지역변수가 되기때문에 임시 변수가 전역공간을 어지럽힐 걱정 없어!
- 개별 기능을 독자적인 모듈로 감쌀 수 있다.
```javascript
(function () {
    // 모든 module1 코드
})();
```
### 4.6 즉시 객체 초기화
- 객체가 생성된 즉시 init() 메서드를 실행해 객체를 사용.
- init()함수는 모든 초기화 작업을 처리
    ```javascript
    ({
        maxWidth: 600,
        maxHeight: 400,
        gimmeMax: function () {
            return `${this.maxWidth}x${this.maxHeight}`;
        },
        init: function () {
            console.log(this.gimmeMax());
            // ...더 많은 초기화 작업들
        }
    }).init();
    ```
    - 단 한번의 초기화 작업을 실행하는동안 전역 네임스페이스를 보호할 수있다.
    - 초기화 작업이 복잡하다면 전체 초기화 절차를 구조화하는데 도움이 된다.
    - 이 패턴은 주로 일회성 작업
    - init()이 완료되고 나면 객체에 접근할 수 없다.
    - init()이 완료된 이후 객체의 참조를 유지하고 싶다면 init()의 마지막에 return this;를 추가해라.
### 4.7 초기화 시점의 분기
- 초기화 시점의 분기(로드 타임 분기)는 최적화 패턴이다.
- 어떤 조건이 프로그램의 생명주기 동안 변경되지 않는 확실할 경우, 조건을 단 한번만 확인하는 것이 바람직하다.
- 브라우저 탐지가 전형적인 예!
    - XMLHttpRequest가 내장 객체로 지원되는 걸확인했다면, 프로그램 실행 중에 브라우저가 바뀌어 난데없이 ActiveX객체를 다루게 될리는 없다.
    - 실행 환경은 변하지 않기 때문에, 코드가 XHR 객체를 지원하는지 매번 다시 확인할 필요가 없다.
- DOM 엘리먼트의 계산된 스타일을 확인하거나 이벤트 핸들러를 붙이는 작업도 초기화 시점 분기 패턴의 이점을 살릴 수 있는 또 다른 후보들.
- 이벤트 리스너를 등록하고 해제하는 메서드를 가지는 유틸리티 구현
    ```javascript
    // 변경 이전
    var utils = {
        addListener: function (el, type, fn) {
            if (typeof widnow.addEventListener === 'function') {
                el.addEventListener(type, fn, false);
            } else if (typeof document.attachEvent === 'function') {
                // IE
                el.attachEvent('on' + type, fn);
            } else {
                el['on' + type] = fn;
            }
        },
        removeListener: function (el, type, fn) {
            // 거의 동일한 코드...
        }
    };
    ```
    - 이 코드는 비효율적. utils.addListener(), utils.removeListener()를 호출할 때마다 똑같은 확인 작업이 반복해서 실행
- 초기화 시점 분기를 이용하면, 처음 스크립트를 로딩하는 동안에 브라우저 기능을 한번만 확인합니다.
    - 확인과 동시에 함수가 페이지의 생명주기 동안 어떻게 동작할 지를 재정의
    ```javascript
    // 변경 이후
    // 인터페이스
    var utils = {
        addListener: null,
        removeListener: null
    };

    // 구현
    if (typeof window.addEventListener === 'function') {
        utils.addListener = function (el, type, fn) {
            el.addEventListener(type, fn, false);
        };
        utils.removeListener = function (el, type, fn) {
            el.removeEventListener(type, fn, false);
        };
    } else if (typeof document.attacheEvent === 'function') { // IE
        utils.addListener = function (el, type, fn) {
            el.attachEvent('on' + type, fn);
        };
        utils.removeListener = function (el, type, fn) {
            el.detachEvent('on' + type, fn);
        };
    } else { // 구형 브라우저
        utils.addListener = function (el, type, fn) {
            el['on' + type] = fn;
        };
        utils.removeListener = function (el, type, fn) {
            el['on' + type] = null;
        };
    }
    ```
    - 브라우저 기능은 독립적으로 변한다.
    - 가장 좋은 전략은 초기화 시점의 분기를 사용해 기능을 개별적으로 탐지하는 것.

### 4.8 함수 프로퍼티 - 메모이제이션(Memoization)) 패턴
- 함수는 객체이기 때문에 프로퍼티를 가질 수 있다.
- 사실 함수는 처음부터(생성될떄부터) 프로퍼티와 메서드를 가지고 있다.
- 각 함수는 어떤 문법으로 생성하든 자동으로 length 프로퍼티를 갖는다. 함수가 받는 인자의 개수를 값으로 가진다.
    ```javascript
    function func(a, b, c) {}
    console.log(func.length); // 3
    ```
- 함수에 프로퍼티를 추가하여 결과(반환 값)를 캐시하면 다음 호출 시점에 복잡한 연산을 반복하지 않을 수 있다.
##### 메모이제이션 패턴 예제
- myFunc함수에 cache프로퍼티를 생성한다.
- 이 프로퍼티는 일반적인 프로퍼티처럼 myFunc.cache와 같은 형태로 접근 가능
- cache 프로퍼티는 함수로 전달된 param 매개변수를 키로 사용하고 꼐산의 결과를 값으로 가지는 객체(해시)다.
- 결과 값은 필요에 따라 복잡한 데이터 구조로 저장 가능
```javascript
var myFunc = function (param) {
    if (!myFunc.cache[param]) {
        var result = {};
        myFunc.cache[param] = result;
    }

    return myFunc.cahce[param];
};
// 캐시 저장 공간
myFunc.cache = {};
```
- 만약 더 많은 매개변수와 더 복잡한 타입을 갖는다면 일반적으로 직렬화하여 해결할 수 있을다.
    - 예를 들어 JSON문자열로 직렬화하고 이 문자열을 cache객체로 키로 사용할 수있다.
    ```javascript
    var myFunc = function () {
        var cachekey = JSON.stringify(Array.prototype.slice.call(arguments)),
            result;
        
        if (!myFunc.cache[cachekey]) {
            result = {};
            myFunc.cache[cachekey] = result;
        }
        return myFunc.cache[cachekey];
    };

    // 캐시 저장 공간
    myFunc.cache = {};
    ```
    - 직렬화 하면 객체를 식별할 수 없게 되는 것을 주의하라.
    - 만약 같은 프로퍼티를 가지는 두 개의 다른 객체를 직렬화 하면, 이 두 객체는 같은 캐시 항목을 공유하게 될 것이다.
    - arguments.callee를 이용해서 함수이름 하드코딩하지말자! (ECMAScript 5 스트릭 모드에서는 허용되지 않아...)
    ```javascript
    var myFunc = function (param) {
        var f = arguments.callee,
            result;
        
        if (!f.cache[param]) {
            result = {};
            f.cache[param] = result;
        }
        return f. cache[param];
    };

    // 캐시 저장공간
    myFunc.cache = {};
    ```
### 4.9 설정 객체 패턴
- 좀 더 깨끗한 API를 제공하는 방법
- 라이브러리나 다른프로그램에서 사용할 코드를 만들때 유용
- DOM 엘리먼트를 생성할 때나 엘리먼트의 CSS 스타일을 지정할 때 유용.
    - 엘리먼트와 스타일은 많은 수의 어트리뷰트와 프로퍼티를 가지며 대부분은 선택적인 값이기 때문.
```javascript
function addPerson(first, last, dob, gender, address) {
    //...
}

addPerson("Bruce", "Wayne", new Date(), null, null, "batman");
```
##### 설정 객체의 장점
- 매개변수와 순서를 기억할 필요 X
- 선택적인 매개변수를 안전하게 생략할 수 있다.
- 읽기 쉽고 유지보수하기 편하다.
- 매개변수를 추가하거나 제거하기가 편하다.
##### 설정 객체의 단점
- 매개변수의 이름을 기억해야 한다.
- 프로퍼티 이름은 압축되지 않는다.

```javascript
addPerson(conf);
var conf = {
    username: 'batman',
    first: 'Bruce',
    last: 'Wayne'
};
```
### 4.10 커리(Curry)
#### 함수 적용
- 함수는 불려지거나 호출된다고 표현하기보다는 적용(apply)된다고 표현한다.
- Function.prototype.apply()를 사용하면 함수를적용할 수 있다.
```javascript
var sayHi = function (who) {
    return `Hello~ ${who ? ","+who: ""}!`;
};

sayHi();
sayHi('Jodeng');

sayHi.apply(null, ["hello"]); // 첫번째 매개변수가 null이면 this는 전역객체를 가리킴.
```
- apply는 두개의 매개변수를 갖는다.
    - apply(context, [params]);
    - 첫번째 매개변수는 이 함수 내에 this와 바인딩할 객체
    - 두번째는 배열 또는 인자(arguments)로 함수 내부에서 배열과 비슷한 형태의 arguments 객체로 사용하게 된다.
    - 첫번째 매개변수가 null 이면, this는 전역 객체를 가리킴.
```javascript
var alien = {
    sayHi: function (who) {
        return `Hello! ${who}!`;
    }
};

alien.sayHi('world');
sayHi.apply(alien, ['humans']);
sayHi.call(alien, 'humans'); // sayHi.call(alien, 'humans', 'hi', ...)
```
- call은 apply와 같은 일함.
- 다만 두번째 매개변수가 배열(apply), call(, , 쭉 쉼표로 이어나감)
#### 부분적인 적용
```javascript
var add = function (x, y) {
    return x + y;
};
add.apply(null, [5, 4]);
var newadd = add.partialApply(null, [5]);
newadd.apply(null, [4]);

// 이것은 사실 add(5)(4)와 같음.. 
```
- 함수가 부분적인 적용을 이해하고 처리할 수 있도록 만드는 과정을 '커링'이라고 한다!
#### 커링(Curring)
- 수학자 하스켈 커리로 부터 유래
- 커링은 함수를 변형하는 과정
- 자바스크립트에서는 add()함수를 수정하여 부분 적용을 처리하는 커링 함수로 만들 수 있다.
    ```javascript
        function add(x, y) {
            var oldx = x, oldy = y;
            if (typeof oldy === 'undefined') {
                return function (newy) {
                    return oldx = newy;
                };
            }
            // 전체 인자를 적용
            return x + y;
        }

        typeof add(5); // 'function'
        add(3)(4);

        // 새로운 함수를 만들어 저장
        var add2000 = add(2000);
        add2000(10);
        ```
#### 커링을 사용해야 할 경우
- 어떤 함수를 호출할 때 대부분의 매개변수가 항상 비슷하다면, 커링의 적합한 후보라 할 수 있다.
- 매개변수 일부를 적용하여 새로운 함수를 동적으로생성하면 이 함수는 반복되는 매개변수를 내부적으로 저장하여, 매번 인자를 전달하지 않아도 원본 함수가 기대하는 전체 목록을 미리 채워 놓을것이다.