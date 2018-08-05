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
console.log(typeof good_morning); // object
console.log(good_morning.tastes);

// 안티패턴: 'new'를 빼먹었다.
var good_morning2 = Waffle();
console.log(typeof good_morning2); // undefined
console.log(window.tastes); // 'yummy'
```
#### 명명 규칙
- 생성자 함수명의 첫글자를 대문자로 쓰자.
- 일반적인 함수와 메서드의 첫글자는 소문자 사용.

#### that 사용
- 생성자가 항상 생성자로 동작하도록 해주는 패턴
```javascript
function Waffle1() {
    var that = {}; // 변수명은 that말고 self, me도 많이 사용한다.
    that.tastes = 'yummy1';
    return that;
}

function Waffle2() {
    return {
        tastes: 'yummy2'
    };
}

var first = new Waffle1(),
    second = Waffle2();

console.log(first.tastes);
console.log(second.tastes);

/*
생성자 함수 호출 방법과 상관없이 항상 객체 반환
*/

```
- 이 패턴의 문제는 프로토타입과의 연결고리르 잃어버리게 됨.
- 즉, Waffle() 프로토타입에 추가한 멤버를 객체에서 사용할 수 없다.
#### 스스로를 호출하는 생성자
```javascript
function Waffle() {
    if (!(this instanceof Waffle)) {
        return new Waffle();
    }

    this.tastes = 'yummy';
}
```
- 생성자 내부에서 this가 해당 생성자의 인스턴스인지를 확인하고, 그렇지 않으면 new와 함꼐 스스로를 재호출
    ```javascript
    function Waffle() {
        if (!(this instanceof Waffle)) {
            return new Waffle();
        }
        this.tastes = 'yummy';
    }

    Waffle.prototype.wantAnother = true;

    var first = new Waffle(),
        second = Waffle();

    console.log(first.tastes);
    console.log(second.tastes);

    console.log(first.wantAnother);
    console.log(second.wantAnother);
    ```
- 인스턴스를 판별하는 방법
    ```javascript
    if (!(this instanceof arguments.callee)) {
        return new arguments.callee();
    }
    ```
    - 함수가 호출될 때, 내부적으로 arguments라는 객체가 생성.
    - 함수에 전달된 모든 인자를 담고 있다는 점을 활용
    - arguments의 callee라는 프로퍼티는 호출된 함수를 가르킨다.
    - arguments.callee는 ES5의 스트릭 모드에서 허용되지 않음.

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
                return oldx + newy;
            };
        }
        // 전체 인자를 적용
        return x + y;
    }

    typeof add(5); // 'function'
    add(3)(4); // 7

    // 새로운 함수를 만들어 저장
    var add2000 = add(2000);
    add2000(10); // 2010
    ```
- 어떤 함수라도 부분적인 매개변수를 받는 새로운 함수로 변형할 수 있을까?
    ```javascript
    function curry (fn) {
        var slice = Array.prototype.slice,
            stored_args = slice.call(arguments, 1);
        return function () {
            var new_args = slice.call(arguments),
                args = stored_args.concat(new_args);
            return fn.apply(null, args);
        };
    }

    function add(x, y) {
        return x + y;
    }

    // 함수를 커링하여 새로운 함수를 얻는다
    var newadd = curry(add, 5);
    newadd(4); // 9

    // 반환되는 새로운 함수를 바로 호출할 수 있다.
    curry(add, 6)(7); // 13

    // 일반함수
    function add(a, b, c, d, e) {
        return a + b + c + d + e;
    }

    curry(add, 1, 2, 3)(5, 5); // 16

    // 2단계의 커링
    var addOne = curry(add, 1);
    addOne(10, 10, 10, 10); // 41
    var addSix = curry(addOne, 2, 3);
    addSix(5, 5); // 16
    ```

#### 커링을 사용해야 할 경우
- 어떤 함수를 호출할 때 대부분의 매개변수가 항상 비슷하다면, 커링의 적합한 후보라 할 수 있다.
- 매개변수 일부를 적용하여 새로운 함수를 동적으로생성하면 이 함수는 반복되는 매개변수를 내부적으로 저장하여, 매번 인자를 전달하지 않아도 원본 함수가 기대하는 전체 목록을 미리 채워 놓을것이다.

## Chapter 5 객체 생성 패턴
### 5.1 네임스페이스 패턴
- 네임스페이스는 프로그램에서 필요로 하는 전역 벼 ㄴ수의 개수를 줄이는 동시에 과도한 접두어를 사용하지 않고도 이름이 겹치지 않게 해준다.
- 자바스크립트 언어 문법에 내장되어 있지는 않지만, 네임스페이스는 꽤 쉽게 구현할 수 있는 기능이다.
- 수많은 함수, 객체, 변수들로 전역 유효범위를 어지럽히는 대신, 애플리케이션이나 라이브러리르 위한 전역 객체를 하나 만들고 모든 기능을 이 객체에 추가한다.
```javascript
// 안티 패턴 - 수정전
// 생성자 함수 2개
function Parent() {}
function Child() {}

// 변수 1개
var some_var = 1;

// 객체 2개
var module1 = {};
module1.data = {a: 1, b: 2};
var module2 = {};
```
- 위의 코드를 리팩토링 해보자!
```javascript
// 수정 후 - 전역 변수 1개
function MYAPP = {};

// 생성자
MYAPP.Parent = function () {};
MYAPP.Child = function () {};

// 변수
MYAPP.some_var = 1;

// 객체 컨테이너
MYAPP.modules = {};

// 객체들을 컨테이너 안에 추가
MYAPP.modules.module1 = {};
MYAPP.modules.module1.data = {a: 1, b: 2};
MYAPP.modules.module2 = {};
```
- 전역 네임스페이스 객체의 이름은 애플리케이션 이름이나 라이브러리의 이름, 도메인명, 회사 이름 중에서 선택할 수 있다.
- 흔히 전역 객체 이름은 모두 대문자로 쓰는 명명규칙을 사용하기도 한다.
- 코드에 네임스페이스를 지정해주며,  코드 내의 이름 충돌 뿐 아니라 이 코드와 같은 페이지에 존재하는 자바스크립트 라이브러리나 위젯 등 서드파티 코드와의 이름 충돌도 방지해준다.
##### 네임스페이스 패턴의 단점
- 모든 변수와 함수에 접두어를 붙여야 하기 떄문에 전체적으로 코드량이 약간 더 많아지고, 따라서 다운로드 파일크기도 늘어남.
- 전역 인스턴스가 단 하나뿐이기 떄문에 코드의 어느 한 부분이 수정되어도 전역 인스턴스를 수정하게 된다. 즉 나머지 기능들도 갱신된 상태를 물려받는다.
- 이름이 중첩되고 길어지므로 프로퍼티를 판별하기 위한 검색 작업도 길고 느려진다.
    - 이 단점을 해결하는 '샌드박스 패턴'이 있다!
#### 범용 네임스페이스 함수
- 네임 스페이스에 추가하려는 프로퍼티가 이미 존재할 수도 있고 따라서 내용을 엎어쓰게 될지도 모른다.
- 네임스페이스를 생성하거나 프로퍼티를 추가하기 전에 먼저 이미 존재하는지 여부 확인할 것!
```javascript
// 위험해!
var MYAPP = {};
// 개선안
if (typeof MYAPP === 'undefined') {
    var MYAPP = {};
}

// 또는 더 짧게 쓸 수 있다.
var MYAPP = MYAPP || {};
```
- 이렇게 추가되는 확인 작ㅇ버 때문에 상당량의 중복 코드가 생겨날 수 있다.
- 네임스페이스 생성의 실제 작업을 맡아줄 재사용 가능한 함수를 만들어 두면 편리!
    ```javascript
    MYAPP.namespace('MYAPP.modules.module2');

    /* 위 코드는 다음과 같은 결과를 반환
    var MYAPP = {
        modules: {
            module2: {}
        }
    };
    */
    ```
    - namespace() 함수를 구현해보자
    ```javascript
    var MYAPP = MYAPP || {};

    MYAPP.namespace = function (ns_string) {
        var parts = ns_string.split('.'),
            parent = MYAPP,
            i;
        
        // 처음에 중복되는 전역 객체명은 제거한다.
        if (parts[0] === 'MYAPP') {
            parts = parts.slice(1);
        }
        
        for (i = 0; i < parts.length; i += 1) {
            // 프로퍼티가 존재하지 않으면 생성한다.
            if (typeof parent[parts[i]] === 'undefined') {
                parent[parts[i]] = {};
            }
            parent = parent[parts[i]];
        }
        return parent;
    };

    // 반환 값을 지역 변수에 할당
    var module2 = MYAPP.namespace('MYAPP.modules.module2');
    module2 === MYAPP.modules.module2; // true

    // 첫부분의 'MYAPP'을 생략하고도 쓸 수 있다.
    MYAPP.namespace('modules.module51');
    ```
### 5.2 의존 관계 선언
- 자바스크립트 라이브러리들은 대개 네임스페이스를 지정하여 모듈화되어 있기 때문에, 필요한 모듈만 골라서 쓸 수 있다.
- 이 때 함수나 모듈 내 최상단에, 의존 관계에 있는 모듈을 선언하는 것이 좋다.
- 즉 지역 변수를 만들어 원하는 모듈을 가리키도록 선언하는 것이다.
    ```javascript
    var myFunction = function () {
        // 의존 관계에 있는 모듈
        var event = Util.Event,
            dom = Util.Dom;

        // 이제 event와 dom이라는 변수를 사용한다.
    };
    ```
- 장점?!
    - 의존 관계과 명ㅅ히적으로 선언되어 있기 때문에 코드를 사용하는 사람이 페이지 내에 반드시 포함시켜야 하는 스크립트 파일이 무엇인지 알 수 있다.
    - 함수의 첫 머리에 의존 관계가 선언되기 떄문에 의존 관계를 찾아내고 이해하기가 쉽다.
    - dom과 같은 지역 변수는 Util같은 전역 변수보다 언제나 더 빠르다.
    - 의존 관계 선언 패턴을 잘 지키면 함수 안에서 전역 객체 판별을 단 한번만 수행하고, 이 다음부터는 지역 변수를 사용하기 떄문에 훨씬 빠르다.
    - 코드 압축 시 실제 코드량이 더 적어지고 사용자가 다운로드 하는 파일 크기도 더 작아진다.
### 5.3 비공개 프로퍼티와 메서드
- 자바스크립트에서 객체의 모든 멤버는 public, 공개되어있다!
```javascript
var myobj = {
    myProp: 1,
    getProp: function () {
        return this.myprop;
    }
};
console.log(myobj.myprop);
console.log(myobje.getProp());

function Gadget() {
    this.name = 'iPod';
    this.stretch = function () {
        return 'iPad';
    };
}

var toy = new Gadget();
console.log(toy.name);
console.log(toy.stretch());
```
#### 비공개(private) 멤버
- 비공개 멤버에 대한 별도의 문법은 없지만 클로저를 사용해서 구현할 수 있다.
- 생성자 함수 안에서 클로저를 만들면, 클로저 유효범위 안의 변수는 생성자 함수 외부에 노출되지 않지만 객체의 공개 메서드 안에서는 쓸 수 있다.
- 즉 생성자에서 객체를 반환할 때 객체의 메서드를 정의하면, 이 메서드 안에서는 비공개 변수에 접근할 수 있는 것이다.
```javascript
function Gadget() {
    // 비공개 멤버
    var _name = 'iPod';
    // 공개된 함수
    this.getName = function () {
        return name;
    };
}
var toy = new Gadget();

// name은 비공개이므로 undefined 출력
console.log(toy.name);

console.log(toy.getName()); // iPod
```
- 비공개를 유지할 데이터를 함수로 감싸기만 하면돼~!
- 이 데이터들을 함수의 지역 변수로 만들면, 함수 외부에서는 접근할 수 없다.

#### 특권(privilieged) 메서드
- 비공개 멤버에 접근권한을 가진 공개 메서드를 가르킨다.
- 위에 예제에서 getName() 메서드가 _name에 대해 특별한 접근권한을 가지고 있기 때문에 특권 메서드다.

#### 비공개 멤버의 허점
- 특권 메서드에서 비공개 변수의 값을 바로 반환할 경우 이 변수가 '객체'나 '배열'이라면 값이 아닌 참조가 반환되기 떄문에, 외부 코드에서 비공개 변수 값을 수정할 수 있다.
    ```javascript
    function Gadget() {
        // 비공개 멤버
        var _specs = {
            screen_width: 320,
            screen_height: 480,
            color: 'pink'
        };

        // 공개 함수
        this.getSpecs = function () {
            return _specs;
        };
    }

    var toy = new Gadget(),
        specs = toy.getSpecs();
    specs.color = 'black';
    specs.price = 'free';

    console.dir(toy.getSpecs());
    ```
    - _specs 는 비공개이지만 객체 또는 배열일 때 참조된다면 외부에서도 private한 _specs가 외부 사용자에 의해 변경될 수 있다.
        - 객체를 복사하는 범용 함수를 사용하여 _specs 객체의 복사본을 만들어 사용
#### 객체 리터럴과 비공개 멤버
- 비공개 데이터를 함수로 감싸기만 하면돼
- 객체 리터럴에서는 익명 즉시 실행 함수를 추가하여 클로저를 만든다.
    ```javascript
    var myobj; // 이 변수에 객체를 할당할 것이다.
    (function () {
        // 비공개 멤버
        var _name = "my, oh my";

        // 공개될 부분을 구현한다.
        // var를 사용하지 않았다는데 주의하라.
        myobj = {
            // 특권 메서드
            getName: function () {
                return _name;
            }
        };
    })();

    myobj.getName(); // "my, oh my"
    ```
- 모듈 패턴의 기초가 되는 부분
    ```javascript
    var myobj = (function () {
        // 비공개 멤버
        var _name = "my, oh my";

        // 공개될 부분을 구현한다.
        return {
            getName: function () {
                return _name;
            }
        };
    })();
    myobj.getName();
    ```
#### 프로토타입과 비공개 멤버
- 생성자를 사용하여 비공개 멤버를 만들 경우, 생성자를 호출하여 새로운 객체를 만들 떄마다 비공개 멤버가 매번 재생성된다는 단점.
- 사실 생성자 내부에서 this에 멤버를 추가하면 항상 이런 문제가 발생한다.
- 이러한 중복을 없애고 메모리를 절약하려면 공통 프로퍼티와 메서드를 생성자의 prototype 프로퍼티에 추가해햔다.
- 동일한 생성자로 생성한 모든 인스턴스가 공통된 부분을 공유하기 된다.
- 감춰진 비공개 멤버들도 모든 인스턴스가 함꼐 쓸 수 있다.
- 이를 구현하기 위해 두 가지 패턴 필요
    - 생성자 함수 내부에 비공개 멤버를 만든느 패턴
    - 객체 리터럴로 비공개 멤버를 만드는 패턴
        - prototype 프로퍼티도 결국 객체라서, 객체 리터럴로 생성할 수 있기 때문
```javascript
function Gadget() {
    // 비공개 멤버
    var _name = 'iPod';
    // 공개 함수
    this.getName = function () {
        return _name;
    };
}

Gadget.prototype = (function () {
    // 비공개 멤버
    var _browser = "Mobile Webkit";
    
    // 공개된 프로토타입 멤버
    return {
        getBrowser: function () {
            return _browser;
        }
    }
})();

var toy = new Gadget();
console.log(toy.getName()); // 객체 인스턴스의 특권 메서드 iPod
console.log(toy.getBrowser()); // 프로토타입의 특권 메서드 Mobile Webkit
```
#### 비공개 함수를 공개 메서드로 노출시키는 방법
- 노출 패턴(revelation pattern) : 비공개 메서드를 구현하면서 동시에 공개 메서드로도 노출하는 것.
- 객체의 모든 기능이 객체가 수행하는 작업에 필수불가결한 것들이라서 최대한의 보호 필요
    - 동시에 이 기능들의 유용성떄문에 공개적인 접근도 허용하고 싶은 경우에 사용
- 노출 패턴의 유용한 경우
    - 메서드가 공개되어 있다는 것은 결국 이 메서드가 위험에 노출되어 있다는 말과 같다.
    - 공개 API 사용자가 어쩌면 본의 아니게 메서드를 수정할 수 있기 떄문
    - ECMAScript 5에서는 객체를 고정시킬 수 있는 Object.freeze() 같은 메서드 지원
##### 모듈 노출 패턴
- 크리스천 헤일먼이 만들어냄
```javascript
var myarray;

(function () {
    var astr = '[object Array]',
        toString = Object.prototype.toString;
    
    function isArray(a) {
        return toString.call(a) === astr;
    }

    function indexOf(haystack, needle) {
        var i = 0,
            max = haystack.length;
        for (; i < max; i += 1) {
            if (haystack[i] === needle) {
                return i;
            }
        }
        return -1;
    }

    myarray = {
        isArray: isArray,
        indexOf: indexOf,
        inArray: indexOf
    };

})();

myarray.isArray([1, 2]);
myarray.isArray({0: 1});
myarray.indexOf(["a", "b", "z"], "z");
myarray.inArray(["a", "b", "z"], "z");
```
- 비공개 함수는 안전하게 보호
```javascript
myarray.indexOf = null;
myarray.inArray(['a', 'b', 'z'], 'z');
```
### 5.4 모듈 패턴
- 모듈 패턴은 늘어나는 코드를 구조화 하고 정리하는데 도움이 됨.
- 모듈 패턴을 사용하면 개별적인 코들르 느슨하게 결합시킬 수 있어!
- 소프트웨어 개발중에 끊임 없이 변하는 요구 사항에 따라 기능을 추가하거나 교체하거나 삭제하는 것도 자유롭게 할 수 있음.
- 모듈 패턴은 다음의 패턴들을 조합해서 만든다
    - 1. 네임스페이스 패턴
    - 2. 즉시 실행 함수
    - 3. 비공개 멤버와 특권 멤버
    - 4. 의존 관계 선언
    ```javascript
    // 의존성 테스트 용도 객체 선언 (실제로는 모듈 구현부가 들어감.)
    MYAPP.namespace('MYAPP.utilities.object');
    MYAPP.namespace('MYAPP.utilities.lang');
    
    MYAPP.namespace('MYAPP.utilities.array'); // 1. 네임 스페이스 설정
    
    /*
    2. 즉시 실행 함수를 사용해 비공개 유효범위를 만듦.
    */
    MYAPP.utilities.array = (function () {
        // 4. 의존 관계 선언
        var utilObj = MYAPP.utilities.object,
            utilLang = MYAPP.utilities.lang;

        // 3. 비공개 멤버
        var array_string = '[object Array]',
            toString = Object.prototype.toString;
        var indexOf = function (haystack, needle) {
            var i = 0, max = haystack.length;
            for (; i < max ; i += 1) {
                if (haystack[i] === needle) {
                    return i;
                }
            }
            return -1;
        };

        var isArray = function (arr) {
            return toString.call(arr) === array_string;
        };
        // 3. 외부에서 접근할 공개 특권 멤버들을 반환 (공개 API만 노출)
        return {
            indexOf: indexOf,
            inArray: indexOf,
            isArray: isArray
        };
    })();
    ```
#### 모듈 노출 패턴
- 모든 메서드를 비공개 상태로 유지하고, 최종적으로 공개 API를 갖출 때 공개할 메서드만 골라서 노출
```javascript
// 공개 API만 노출
return {
    indexOf: indexOf,
    inArray: indexOf,
    isArray: isArray
};
```
#### 생성자를 생성하는 모듈
- 생성자 함수를 사용해 객체를 만드는게 더 편할때 있어!
- 모듈을 감싼 즉시 실행 함수가 마지막에 객체가 아니라 함수를 반환하게 하자!
    ```javascript
    // 생성자를 생성하는 모듈
    MYAPP.namespace('MYAPP.utilities.array2'); // 1. 네임 스페이스 설정
    
    /*
    2. 즉시 실행 함수를 사용해 비공개 유효범위를 만듦.
    */
    MYAPP.utilities.array2 = (function () {
        // 4. 의존 관계 선언
        // ...

        // 3. 비공개 프로퍼티 선언 및 비공개 메서드 선언...
        // ...

        // 생성자 변수
        var Constr;

        // 공개 API - 생성자 함수
        Constr = function (o) {
            this.elements = this.toArray(o);
        };
        // 공개 API - 프로토타입
        Constr.prototype = {
            constructor: MYAPP.utilities.array2,
            version: '2.0',
            toArray: function (obj) {
                for (var i = 0, a = [], len = obj.length ; i < len ; i += 1) {
                    a[i] = obj[i];
                }
                return a;
            }
        };

        return Constr;
    })();
    // 샘플 htmlCollection 가져오기
    var htmlCollections = document.querySelectorAll('.menu-list li');
    
    // 생성자 함수 사용
    var arr = new MYAPP.utilities.array2(htmlCollections);
    arr.toArray(htmlCollections);
    ```
#### 모듈에 전역 변수 가져오기
- 모듈을 감싼 즉시 실행 함수에 인자를 전달하는 형태
- 보통 전역 변수에 대한 참조 또는 전역 객체 자체를 전달
- 전역 변수를 전달하면 즉시 실행 함수 내에서 지역 변수로 사용할 수 있기 때문에 탐색 작업이 좀 더 빨라짐.
```javascript
MYAPP.utilites.module = (function (app, global) {
    // 전역 객체에 대한 참조
    // 전역 애플리케이션 네임스페이스 객체 대한 참조가 지역 변수화 된다.
})(MYAPP, this);
```
### 5.5 샌드박스 패턴
- 샌드박스 패턴은 네임스페이스의 다음과 같은 단점을 해결
    - 애플리케이션 전역 객체가 단 하나의 전역 변수에 의존
    - 네임스페이스 페턴으로는 동일한 애플리케이션이나 라이브러리의 두 가지 버전을 한 페이지에서 실행시키는 것이 불가능
    - NYAPP.utilites.array와 같이 점으로 연결된 긴 이름을 써야하고 런타임에는 탐색 작업을 거쳐야 한다.
- 샌드박스 패턴은 어떤 모듈이 다른 모듈과 그 모듈의 샌드박스에 영향을 미치지 않고 동작할 수 있는 환경을 제공한다.
#### 전역 생성자
- 네임 스페이스 패턴은 전역 객체가 하나다.
- 샌드박스 패턴의 유일한 전역은 생성자다.
    - Sandbox() 생성자를 통해 객체들을 생성
    - 이 생성자에 콜백함수를 전달해 해당 코드를 샌드박스 내부 환경으로 격리
    ```javascript
    new Sandbox(function (box) {
        /// 여기에 코드가 들어감...
    });
    ```
    - box객체는 네임스페이스 패턴에서의 MYAPP과 같은 것.
    - 코드가 동작하는데 필요한 모든 라이브러리 기능들이 여기에 들어감.
    - 여기에 두가지를 추가해보자
        - new를 강제하는 패턴을 활용하여 객체를 생성할때 new를 쓰지 않아도 되게 만듦
        - Sandbox() 생성자가 선택자인 인자를 하나 이상 받을 수 있게 한다. 이 인자들은 객체를 생성하는데 필요한 모듈의 이름을 지정한다.
        - 코드의 모듈화를 지향하고 있으므로 Sandbox()가 제공하는 기능 대부분이 실제로는 모듈안에 담겨지게 될 것.
        ```javascript
        // new를 쓰지 않고, 'ajax', 'event'를 사용하는 모듈 객체
        Sandbox(['ajax', 'event'], function (box) {
            console.log(box);
        });

        // 모듈 이름을 개별적인 인자로 전달
        Sandbox('ajax', 'dom', function (box) {
            console.log(box)
        });

        // 쓸수 있는 모듈을 모두 사용할때 - '*'와일드 카드 사용
        Sandbox('*', function (box) {
            //...
        });
        // 쓸수 있는 모듈을 모두 사용할때 - 쓸수있는 모듈명 누락
        Sandbox(function (box) {
            //...
        });

        // Sandbox를 중첩하여 사용하여도 간섭 현상 일어나지 않아!
        Sandbox('dom', 'event', function (box) {
            Sandbox('ajax', function (box) {
                // 바깥쪽 box와 안의 box는 다르다!
            });
        });
        ```
#### 모듈 추가하기
```javascript
Sandbox.modules = {};

Sandbox.modules.dom = function (box) {
    box.getElement = function () {};
    box.getStyle = function () {};
    box.foo = "bar";
};

Sandbox.modules.event = function () {
    // 필요에 따라 다음과 같이 Sandbox 프로토타입에 접근할 수 있다.
    // box.constructor.prototype.m = 'mmm';
    box.attachEvent = function () {};
    box.detachEvent = function () {};
};

Sandbox.module.ajax = function (box) {
    box.makeRequest = function () {};
    box.getResponse = function () {};
};
```
#### 생성자 구현
```javascript
function Sandbox() {
    var args = Array.prototype.slice.call(arguments), // arguments를 배열로 바꿈.
        callbakc = args.pop(), // 마지막 인자는 콜백 함수
        // 모듈은 개별로 전달뒬 수도있고 개별 인자로 전달될 수 있음.
        modules = (args[0] && typeof args[0] === 'string') ? args : args[0],
        i;
    
    // 함수가 생성자로 호출되도록 보장
    if (!(this instanceof Sandbox)) {
        return new Sandbox(modules, callback);
    }

    // this에 필요한 프로퍼티들을 추가
    this.a = 1;
    this.b = 2;

    // 코어 'this' 객체에 모듈을 추가
    // 모듈이 없거나 '*'이면 사용 가능한 모든 모듈을 사용한다는 의미
    if (!modules || modules === '*' || modules[0] === '*') {
        modules = [];
        for (i in Sandbox.modules) {
            if (Sandbox.modules.hasOwnProperty(i)) {
                modules.push(i);
            }
        }
    }

    // 필요한 모듈들을 초기화
    for (i = 0; i < modules.length; i += 1) {
        Sandbox.modules[moduels[i]](this);
    }

    callbakc(this);
}

Sandbox.prototype = {
    name: 'My Application',
    version: '1.0',
    getName: function () {
        return this.name;
    }
};
```
### 5.6 스태틱 멤버
- 스태틱 프로퍼티와 메서드란 인스턴스에 따라 달라 지지 않는 프로퍼티와 메서드
- 공개 스태틱 멤버는 클래스의 인스턴스를 생성하지 않고도 사용 가능.
- 비공개 스태틱 멤버는 클래스 사용자에게는 보이지 않지만 클래스의 인스턴스들은 모두 함께 사용할 수 있다.
#### 공개 스태틱 멤버
```javascript
// 생성자
var Gadget = function () {};
Gadget.isShiny = function () {
    return '반짝반짝 빛나는 구나!';
};
Gadget.prototype.setPrice = function (price) {
    this.price = price;
};

// 스태틱 메서드 호출
Gadget.isShiny();

// 인스턴스 생성 후 메서드 호출
var iphone = new Gadget();
iphone.setPrice(500);
```
- 메서닥 스태틱한 방법으로, 스태틱 하지 않은 방법으로도 호출될 때는?
    ```javascript
    var Gadget = function (price) {
        this.price = price;
    };

    // 스태틱 메서드
    Gadget.isShiny = function () {
        var msg = 'you bet';

        if (this instanceof Gadget) {
            // 스태틱하지 않고 인스턴스로 호출되었을때
            msg += `, it costs $${this.price}!`;
        }

        return msg;
    };

    Gadget.prototype.isShiny = function () {
        return Gadget.isShiny.call(this);
    };

    // 스태틱 메서드 호출
    Gadget.isShiny(); // 'you bet'

    // 인스턴스를 통해 스태틱하지 않은 방법으로 호출
    var a = new Gadget(499.99);
    a.isShiny(); // 'you bet, it consts $ 499.99!'
    ```
- ES6 Class에서는 static 예약어 제공
```javascript
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
};

const p1 = new Point(5, 5);
const p2 = new Poinst(10, 10);

console.log(Point.distance(p1, p2));
```
#### 비공개 스태틱 멤버
- 비공개 스태틱 멤버란?
    - 동일한 생성자 함수로 생성된 객체들이 공유하는 멤버
    - 생성자 외부에서는 접근 불가
- Gadget 생성자 안에 counter라는 비공개 스태틱 프로퍼티 구현 예제
    - 먼저 클로저 함수 만들고
    - 비공개 멤버를 이 함수로 감싼 후
    - 이 함수를 즉시 실행한 결과로 새로운 함수를 반환
    ```javascript
    var Gadget = (function () {
        // 스태틱 변수/프로퍼티
        var counter = 0;

        // 생성자의 새로운 구현 버전 반환
        return function () {
            console.log(counter += 1);
        };
    })();

    var g1 = new Gadget(); // 1
    var g2 = new Gadget(); // 2
    var g3 = new Gadget(); // 3
    ```
    - g1, g2, g3모든 인스턴스가 counter값을 공유
- 비공개 스태틱 프로퍼티에 접근할 수 있는 특권메서드 추가
    ```javascript
    var Gadget = (function () {
        // 스태틱 변수 프로퍼티
        var counter = 0, NewGadget;

        // 이 부분이 생성자를 새롭게 구현한 부분
        NewGadget = function () {
            counter += 1;
        };

        // 특권 메서드
        NewGadget.prototype.getLastId = function () {
            return counter;
        };

        // 생성자를 덮어쓴다.
        return NewGadget;
    })();

    var g1 = new Gadget();
    g1.getLastId(); // 1

    var g2 = new Gadget();
    g2.getLastId(); // 2

    var g3 = new Gadget();
    g3.getLastIe(); // 3
    ```
- 공개 / 비공개 스태틱 프로퍼티는 상당히 편리하다
    - 특정 인스턴스에 한정되지 않는 메서드와 데이터
    - 인스턴스별로 매번 재생성되지도 않음.
### 5.7 객체 상수
- ES6 const 예약어를 통해 상수 정의 가능
- 명명 규칙을 이용하여 모두 대문자와 '_'사용
##### constant 객체 구현
- constant는 다음과 같은 메서드를 제공
    - set(name, value) : 새로운 상수 정의
    - isDefined(name) : 특정 이름의 상수가 있는지 확인
    - get(name) : 상수의 값을 가져온다.
- 이 예제는 상수 값으로 원시 데이터 타입만 허용
- 선언하려는 상수의 이름이 toString, hasOwnProperty등 내장 프로퍼티의 이름과 겹치지 않도록 보장하기 위해 hasOwnProperty()를 사용한 별도의 확인 작업을 거침.
- 모든 상수의 이름 앞에 접두어 붙임
```javascript
var constant = (function () {
    var constants = {},
        ownProp = Object.prototype.hasOwnProperty,
        allowed = {
            stirng: 1,
            number: 1,
            boolean: 1
        },
        prefix = (Math.random() + '_').slice(2);
    return {
        set: function (name, value) {
            if (this.isDefined(name)) {
                return false;
            }
            if (!ownProp.call(allowed, typeof value)) {
                return false;
            }
            constants[`${prefix}${name}`] = value;
            return true;
        },
        isDefined: function (name) {
            return ownProp.call(constants, `${prefix}${name}`);
        },
        get: function (name) {
            if (this.isDefined(name)) {
                return constants[`${prefix}${name}`];
            }
            return null;
        }
    };
})();

constant.isDefined('maxwidth'); // false
constant.set('maxwidth', 480); // true
constant.isDefined('maxwidth'); // true
constant.set('maxwidth', 320); // false
constant.get('maxwidth'); // 480
```
### 5.8 체이닝 패턴
- 연쇄적으로 메서들르 호출할 수 있도록 하는 패턴
    - ex) myobje.method1('hello').method2().method3('world').method4();
- 만약 메서드에 의미있는 반환값이 존재하지 않는다면, 현재 작업중인 객체 인스턴스인 this반환
```javascript
var obj = {
    value: 1,
    increament: function () {
        this.value += 1;
        return this;
    },
    add: function (v) {
        this.value += v;
        return this;
    },
    soute: function () {
        alert(this.value);
    },
    log: function () {
        console.log(`value: ${this.value}`);
    }
};

// 메서드 체이닝 호출
obj.increament().add(3).log();
obj.increament();
obj.add(100);
obj.log();
```
#### 체이닝 패턴의 장단점
- 장점
    - 코드량 줄어듦
    - 좀 더 간결해져 하나의 문장처럼 읽히게 됨.
    - 함수를 쪼개는 방법을 생각할 수 있게 됨.
    - 유지보수 개선
- 단점
    - 디버깅하기 어려움
    - 여러개의 메서드중 하나가 실패해버리면, 실패한 메서드가 어느것인지 알아내기 어려움.
    - 클린 코드의 저자 로버트 마틴은 이러한 상황을 '열차 사고'패턴 이라고 함.
- Usage
    - jQuery 라이브러리 등에서 널리 사용
    - DOM의 요소들은 체이닝 패턴 이용
        - ex) document.getElementsByTagName('head')[0].appendChild(newnode);
### 5.9 method() 메서드
- 생성자 본문 내에서 인스턴스 프로퍼티를 추가할 수 있다
- 생성자 함수 사용법은 this에 인스턴스 메서드를 추가하게 되면 인스턴스가 생성될 때 마다 메서드가 재생성되어 메모리를 잡아먹기 때문에 비효율적!
- 재사용 가능한 메서드는 생성자의 prototype프로퍼티에 추가되어야 함.
    - 이 부분을 method()라는 메서드에 숨겨두는 것 (syntax sugar)
```javascript
// method() 구현
if (typeof Function.prototype.method !== 'function') {
    Function.prototype.method = function (name, implementation) {
        this.prototype[name] = implementation;
        return this;
    };
}
var Person = function (name) {
    this.name = name;
}.method('getName', function () {
    return this.name;
}).method('setName', function (name) {
    this.name = name;
    return this;
});

var p = new Person('Cho');
p.getName(); // Cho
p.setName('Jodeng').getName(); // Jodeng
```

## Chapter 7 - 코드 재사용 패턴
- 코드 재사용 접근 시 Gof(Gang of Four)의 충고를 가슴에 새겨두자.
    - '클래스 상속보다 객체 함성을 우선시 하라'
### 6.1 클래스(classical) 방식 vs. 새로운 방식의 상속(inheritance) 패턴
- 자바스크립트는 클래스라는 개념이 없고 함수를 선언해서 '클래스 처럼(new)' 사용하는거지!
- 자바스크립트의 객체는 단순히 키-값의 쌍들일 뿐이며, 언제든지 생성하고 변경할 수 있다.
### 6.2 클래스 방식의 상속을 사용할 경우 예상되는 산출물
- 자바스크립트에서는 '클래스'라고 하지말고 '생성자 함수'라는 말이 더 맞겠다.
- Parent() 생성자와 Child() 생성자를 정의한 예제
    ```javascript
    // 부모 생성자
    function Parent(name) {
        this.name = name || 'Adam';
    }
    
    // 생성자의 프로토타입에 기능을 추가
    Parent.prototype.say = function () {
        return `Hello ${this.name}`;
    };


    // 아무 내용이 없는 자식 생성자
    function Child(name) {

    }

    // 여기서 상속의 마법이 일어난다.
    inherit(Child, Parent); // inherit함수는 직접 구현해야해!
    ```
### 6.3 클래스 방식의 상속 패턴 #1 - 기본 패턴
- 샘플코드) chapter6/ex01.html 참고
- Parent() 생성자를 사용해 객체를 생성한 다음, 객체를 Child()의 프로토타입에 할당한다.
- 재사용 가능한 inherit()함수의 첫번째 구현
    ```javascript
    function inherit(C, P) {
        C.prototype = new P();
    }
    ```
    - prototype 프로퍼티가 함수가 아니라 객체를 가리키게 하는 것이 중요!
    - 프로토타입이 부모 생성자 함수 자체가 아니라 부모 생성자 함수로 생성한 객체 인스턴스를 가리켜야 한다.
    - new 연산자 사용 중요
    ```javascript
    var kid = new Child();
    kid.say(); // "Adam"
    ```
- 참고)
    - 함수 생성시 일어나는 일
        - function Alert () {//...} // 함수가 생성되면
        - 1. 즉시 prototype이라는 이름의 키게 오브젝트 생성
            - Alert.prototype = {};
        - 2. constructor가 세팅
            - Alert.prototype.constructor = Alert;
    - new 연산자 이용시 일어나는 일
        - var a = new Alert('test');
        - 1. a = {}; 
        - 2. a.__proto = Alert.prototype;
        - 3. temp = Alert.apply(a, arguments);
        - if (typeof temp == 'object' || typeof temp == 'function') a = temp;
#### 프로토타입 체인 추적
- 이 패턴을 사용하면 부모 객체의 프로토타입에 추가된 프로퍼티와 메서드들과 함꼐, 부모 객체 자신의 프로퍼티(this에 추가된 인스턴스 프로퍼티)도 모두 물려받게 된다.
- __proto__라는 숨겨진 링크를 통해 Parent.prototype에 접근 가능.
#### 패턴 #1의 단점
- 부모 객체의 this에 추가된 객체 자신의 프로퍼티와 프로토타입 프로퍼티를 모두 물려받게 된다는 점!
    ```javascript
    var s = new Child('Seth');
    s.say(); // Adam 으잉? 이상하지 않아?
    ```
- 자식 생성자에 인자를 넘겨도 부모 생성자에게 전달하지 못한다!
### 6.4 클래스 방식의 상속 패턴 #2 - 생성자 빌려 쓰기
- 샘플코드) chapter6/ex02-01.html 참고
- 부모 생성자 함수의 this에 자식 객체를 바인딩한 다음, 자식 생성자가 받은 인자들을 모두 넘겨준다.
    ```javascript
    function Child(a, b, c, d) {
        Parent.apply(this, arguments);
    }
    ```
    - 부모 생성자 함수 내부의 this에 추가된 프로퍼티만 물려받게 된다.
    - 푸로토타입에 추가된 멤버는 상속도지 않는다.
- 생성자 빌려쓰기 패턴을 사용하면, 자식 객체는 상속된 멤버의 복사본을 받게 된다.
    ```javascript
    // 부모 생성자
    function Article() {
        this.tags = ['js', 'css'];
    }
    var article = new Article();

    // 클래스 방식의 패턴 #1을 사용해 article 객체를 상속하는 blog 객체를 생성한다.
    function BlogPost() {}
    BlogPost.prototype = article;
    var blog = new BlogPost();
    
    // 생성자 빌려쓰기 패턴을 사용해 article을 상속하는 page객체를 생성
    function StaticPage() {
        Article.call(this);
    }
    var page = new StaticPage();

    console.log(article.hasOwnProperty('tags'));
    console.log(blog.hasOwnProperty('tags'));
    console.log(page.hasOwnProperty('tags'));
    ```
#### 프로토타입 체인
- 샘플코드) chapter6/ex02-02.html 참고
```javascript
// 부모 생성자
function Parent(name) {
    this.name = name || 'Adam';
}

// 프로토타입에 기능 추가
Parent.prototype.say = function () {
    return this.name;
};

// 자식 생성자
function Child(name) {
    Parent.apply(this, arguments);
}

var kid = new Child('Jodeng');
kid.name;
typeof kid.say;
```
- 여기서의 상속은 부모가 가진 자신만의 프로퍼티를 자식의 프로퍼티로 복사해주는 일회성 동작.
- __proto__라는 링크는 유지되지 않는다.
#### 생성자 빌려쓰기를 적용한 다중 상속
- 샘플코드) chapter6/ex02-03.html 참고
- 생성자를 하나 이상 빌려쓰는 다중 상속을 구현할 수 있다.
```javascript
function Cat() {
    this.legs = 4;
    this.say = function () {
        return "meaowww";
    };
}

function Bird() {
    this.wings = 2;
    this.fly = true;
}

function CatWings() {
    Cat.apply(this);
    Bird.apply(this);
}
var jane = new CatWings();
console.dir(jane);
```
#### 생성자 빌려쓰기 패턴의 장단점
- 단점) prototype이 전혀 상속되지 않는다.
    - 재사용되는 메서드와 프로퍼티는 인스턴스별로 재생성되지 않도록 프로토타입에 추가해야되기 때문에
- 장점) 부모 생성자 자신의 멤버에 대한 복사본을 가져올수 있다.
### 6.5 클래스 방식의 상속 패턴 #3 - 생성자 빌려쓰고 프로토타입 지정해주기
- 샘플코드) chapter6/ex03.html 참고
- 부모 생성자를 빌려온 후, 자식의 프로토타입이 부모 생성자를 통해 생성된 인스턴스로 가리키도록 지정.
    ```javascript
    function Child(a, b, c, d) {
        Parent.apply(this, arguments);
    }
    Child.prototype = new Parent();
    ```
    - 장점) 부모가 가진 모든 것을 상속하는 동시에, 부모의 프로퍼티를 덮어쓸 위험 없이 자신만의 프로퍼티를 마음놓고 변경할 수 있다.
    - 단점) 부모 생성자를 비효율적으로 두번 호출
### 6.6 클래스 방식의 상속 패턴 #4 - 프로토타입 공유
- 샘플코드) chapter6/ex04.html 참고
- #3의 방식은 부모 생성자를 두번 호출 => 비효율적
- 이번 패턴은 프로토타입을 공유하고 부모 생성자를 한번도 호출하지 않는다.
- 원칙적으로 재사용할 멤버는 this가 아니라 프로토타입에 추가되어야 한다.
- 상속되어야 하는 모든 것들은 프로토타입 안에 존재해야 한다.
    - 부모의 프로토타입을 똑같이 자식의 프로토타입으로 지정하면된다.
    ```javascript
    function inherit(C, P) {
        C.prototype = P.prototype;
    }
    ```
    장점) 모든 객체가 실제로 동일한 프로토타입을 공유하게 되므로, 프로토타입 체인 검색은 짧고 간단해진다.
    단점) 상속 체인의 하단 어딘가에 있는 자식이나 손자가 프로토타입을 수정할 경우, 모든 부모와 손자뻘의 객체에 영향을 미침.
### 6.7 클래스 방식의 상속 패터 #5 - 임시 생성자
- 샘플코드) chapter6/ex05.html 참고
- 프로토타입 체인의 이점은 유지하면서, 동일한 프로토타입을 공유할때의 문제를 해결하기 위해 부모와 자식의 프로토타입 사이에 직접적인 링크를 끊는다.
```javascript
function inherit(C, P) {
    var F = function () {};
    F.prototype = P.prototype;
    C.prototype = new F();
}
```
#### 상위 클래스 저장
- 부모 원본에 대한 참조 추가
```javascript
function inherit(C, P) {
    var F = function () {};
    F.prototype = P.prototype;
    C.prototype = new F();
    C.superclass = P.prototype;
}
```
#### 생성자 포인터 재설정
- 생성자 함수를 가리키는 포인터를 재설정
```javascript
function inherit(C, P) {
    var F = function () {};
    F.prototype = P.prototype;
    C.prototype = new F();
    C.superclass = P.prototype;
    C.prototype.constructor = C;
}
```
##### 최적화 하기
```javascript
var inherit = (function () {
    var F = function () {};
    return function (C, P) {
        F.prototype = P.prototype;
        C.prototype = new F();
        c.superclass = P.prototype;
        C.prototype.constructor = C;
    }
})();
```
### 6.8 Klass
- 많은 자바스크립트 라이브러리가 새로운 문법 설탕을 도입하여 클래스를 흉내낸다.
    - 클래스의 생성자라고 할 수 있는 메서드에 대한 명명규칙이 존재
    - 이 메서드들은 자동으로 호출되며 initialize, _init등의 이름을 가짐.
    - 클래스는 다른 클래스로부터 상속
    - 자식 클래스 내부에서 부모 클래스(상위 클래스)에 접근할 수 있는 경로가 존재
- 클래스를 모방한 구현 예제
    - 샘플코드) chapter6/klass.html 참고
### 6.9 프로토타입을 활용한 상속
- 샘플코드) chapter6/ex06.html 참고
- 클래스를 사용하지 않는 '새로운' 방식
- 객체가 객체를 상속받는다.
- 재사용하려는 객체가 하나 있고, 또 다른 객체를 만들어 이 첫번째 기능을 가져온다고 생각해라.
    ```javascript
    function object(o) {
        function F() {};
        F.prototype = o;
        return new F();
    }
    // 상속해줄 객체
    var parent = {
        name: "Papa"
    };

    // 새로운 객체
    var child = object(parent);

    // 테스트 해보자
    console.log(child.name); // PaPa
    ```
#### 논의
```javascript
function Person(name) {
    this.name = name ||'Adam';
}
Person.prototype.getName = function () {
    return this.name;
};

// Person 인스턴스 생성
var papa = new Person();

// 이 인스턴스를 상속한다.
var kid = object(papa);

// 부모 자기 자신의 프로퍼티와 프로토타입의 프로퍼티가 모두 상속
console.log(kid, kid.getName(), kid.name); // "Adam", "Adam"
```
- 생성자 함수의 프로토타입 객체만 상속 받을 수있도록 변형
```javascript
function Person(name) {
    this.name = name ||'Adam';
}
Person.prototype.getName = function () {
    return this.name;
};

// 프로토타입 객체만 상속
var kid = object(Person.prototype);

typeof kid.getName; // 'function' : 프로토타입 객체를 상속받아 getName 메서드 존재
typeof kid.name; // 'undefined' : 부모의 프로퍼티를 받지 않음.
```
#### ECAMScript 5 추가사항
- Object.create() 제공
```javascript
// 이 부분이
function object(o) {
    function F () {}
    F.prototype = o;
    return new F();
}

// Object.create()에 구현되어져있다!
var child = Object.create(parent);
```
- Object.create()는 상속과 정의가 가능
    ```javascript
    var child = Object.create(parent, {
        age: {value: 2}
    });

    child.hasOwnProperty('age'); // true
    ```
### 6.10 프로퍼티 복사를 통한 상속 패턴
- 샘플코드) chapter6/ex07.html 참고
- 프로퍼티 복사를 통한 상속 패턴은 객체가 다른 객체의 기능을 단순히 복사를 통해 가져온다.
```javascript
function extend(parent, child) {
    var i;
    child = child || {};
    for (i in parent) {
        if (parent.hasOwnProperty(i)) {
            child[i] = parent[i];
        }
    }
}
var dad = {name: 'Adam'};
var kid = extend(dad);
kid.name; // "Adam"
```
- 자바스크립트 객체는 참조만 전달되기 떄문에 얕은 복사를 통해 상속을 실행한 경우, 자식 쪽에서 객체 타입인 프로퍼티 값을 수정하면 부모의 프로퍼티도 수정된다.
    ```javascript
    var dad = {
        counts: [1, 2, 3],
        reads: {paper: true}
    };
    var kid = extend(dad);
    kid.counts.push(4);
    dad.counts.toString(); // 1, 2, 3, 4
    dad.reads === kid.reads; // true
    ```
- extend() 함수가 깊은 복살르 수행할 수 있도록 수정
    ```javascript
    function extendDeep(parent, child) {
        var i,
            toStr = Object.prototype.toString,
            astr = '[object Array]';

        child = child || {};

        for (i in parent) {
            if (parent.hasOwnProperty(i)) {
                if (typeof parent[i] === 'object') {
                    child[i] = (toStr.call(parent[i]) === astr) ? [] : {};
                    extendDeep(parent[i], child[i]);
                } else {
                    child[i] = parent[i];
                }
            }
        }
        return child;
    }

    var dad = {
        counts: [1, 2, 3],
        reads: {paper: true}
    };
    var kid = extendDeep(dad);
    kid.counts.push(4);
    kid.counts.push(5);
    kid.counts.toString(); // 1, 2, 3, 4, 5
    dad.counts.toString(); // 1, 2, 3

    dad.reads === kid.reads; // false
    kid.reads.paper = false;
    kid.reads.web = true;
    dad.reads.paper; // true
    ```
### 6.11 믹스-인
- 샘플코드) chapter6/ex08.html 참고
- 하나의 객체를 복사하는 게 아니라 여러 객체에서 복사해온 것을 한 객체 안에 섞어 넣을 수 있음.
- 구현 방법 : 함수에 인자로 전달된 객체들을 받아 루프를 돌면서 모든 프로퍼티를 복사
    ```javascript
    function mix() {
        var arg, prop, child = {}, len = arguments.length;
        for (arg = 0; arg < len; arg += 1) {
            for (prop in arguments[arg]) {
                if (arguments[arg].hasOwnProperty(prop)) {
                    child[prop] = arguments[arg][prop];
                }
            }
        }
        return child;
    }

    var cake = mix(
        {eggs: 2, large: true},
        {butter: 1, salted: true},
        {flour: '3 cups'},
        {sugar: 'sure!'}
    );

    console.log(cake);
    ```
    - mix()를 구현하지 않아도 ES6에 Object.assign()을 사용하면 똑같은 결과값을 기대할 수 있다.
    ```javascript
    var cake2 = Object.assign({},
        {eggs: 2, large: true},
        {butter: 1, salted: true},
        {flour: '3 cups'},
        {sugar: 'sure!'}
    );
    - Object.assign(target, ...sources);
        - 첫번째 매개변수는 타겟이 된다.
    ```
### 6.12 메서드 빌려쓰기
- 샘플코드) chapter6/ex09.html 참고
- 어떤 객체에서 메서드 한두개만 마음에 드는 경우가 있다.
    - 이 메서드들을 재사용하고 싶지만 이 객체와 부모-자식 관계 까지 만들고 싶지는 않다.
    - 쓸 일이 없는 모든 메서드를 상속받지 않고 원한느 메서드만 골라서 사용하고 싶다면 메서드 빌려쓰기 패턴을 사용하면 된다.
    - call(), apply() 활용!
##### 메서드 빌려쓰기 패턴 - call(), apply()
- 빌려쓰려는 메서드의 this에 매개변수로 전달한 객체가 바인딩된다.
    - 매개변수로 전달한 객체가 잠시 동안 매서드의 주인(this)가 되어 주인 객체처럼 행세하게 되는 것.
- call()은 호출할 함수에 전달할 매개변수를 별개의 인자들로 받음
    - ex) notmyobj.doStuff.call(myobj, param1, p2, p3);
- apply()는 호출할 함수에 전달할 매개변수를 배열로 받음
    - ex) notmyobj.doStuff.apply(myobj, [param1, p2, p3]);
#### 예제: 배열 메서드 빌려쓰기
- 함수 호출시 들어오는 매개변수들(aguments)는 Arguments라는 Array-Like Object이다.
- 이를 Array.prototype.slice 메서드를 잠시 빌려 써보자.
```javascript
function f() {
    var args = [].slice.call(arguments);
    return args;
}

f(1, 2, 3, 4 , 5, 6);
```
#### 빌려쓰기와 바인딩
- call()이나 apply()를 사용하거나 단순한 할당을 통해 메서드를 빌려오게 되면, 빌려온 메서드 안에서 this가 가리키는 객체는 호출식에 따라 정해지게 된다.
- this값을 고정시키거나, 특정 객체에 바인딩 되도록 처음부터 정해놓은 것.
    ```javascript
    var one = {
        name: "object",
        say: function (greet) {
            return `${greet}, ${this.name}`;
        }
    };

    one.say('Welcome'); // Welcome, object
    ```
    - 또다른 객체 two는 say()메서드를 갖고 있지 않지만 one에서 빌려올 수 있다.
    ```javascript
    var two = {
        name: 'Jodeng'
    }

    one.say.call(two, 'Hello'); // Hello, Jodeng
    ```
    - 그런데 이 함수 포인터가 전역 객체를 가리키게 될 경우에는 어떻게 될까?
    ```javascript
    // 함수를 변수에 할당하면 함수 안의 this는 전역 객체를 가리키게 된다.
    var say = one.say;
    say('hoho'); // hoho, undefiend

    // 콜백 함수로 전달할 경우
    var yetanother = {
        name: 'Yet another Object',
        method: function (callback) {
            return callback('Hola');
        }
    };
    yetanother.method(one.say); // Hola, undefined
    ```
    - say() 안의 this가 전역 객체를 가리키기 때문에 코드가 제대로 동작하지 않는다.
    - 메서드와 객체를 묶어놓기 위해서는 (바인딩 하기 위해서) 다음같이 bind()를 구현해보자
        ```javascript
        function bind(o, m) {
            return function () {
                return m.apply(o, [].slice.call(arguments));
            }
        }

        var taz = bind({name: 'Taz'}, one.say);
        console.log(taz('Hi')); // Hi, Taz
        ```
#### Function.ptototype.bind()
- ES5 Function.prototype.bind() 추가
    ```javascript
    var newFunc = obj.someFunc.bind(myobj, 1, 2, 3);
    ```
- bind() 직접 구현
    ```javascript
    if (typeof Function.prototype.bind === 'undefined') {
        Function.prototype.bind = function (thisArg) {
            var fn = this,
                slice = Array.prototype.slice,
                arges = slice.call(arguments, 1);

                return function () {
                    return fn.apply(thisArg, args.concat(slice.call(arguments)));
                };
        };
    }
    
    var twosay2 = one.say.bind(two);
    twosay2('봉쥬르!'); // 봉쥬르!, Jodeng

    var twosay3 = one.say.bind(two, '사와디캅');
    twosay3(); // 사와디캅, Jodeng
    ```

## Chapter 7 - 디자인 패턴
- GoF 책에서 다뤄진 디자인 패턴은 객체 지향적인 소프트웨어 설계에 관련된 일반적인 문제에 대한 해답을 제시
- 디자인 패턴은 오랫동안 쓰여왔고, 다양한 상황에서 유용성 입증
- 주로 C++, 자바처럼 엄격한 자료형의 정적 클래스 기반 언어 관점에서 연구
- 자바스크립트는 Loosely 느슨한 자료형의 동적 프로토토아비 기반 언어이기 때문에, 일부 디자인 패턴은 놀라울 정도로 쉽게, 심지어 아주 간단한 방법으로 구현 가능.

### 7.1 싱글톤 (Singleton)
- 샘플코드) chapter7/singleton-01.html 참고
- 특정 클래스의 인스턴스를 오직 하나만 유지!
- 동일한 클래스를 사용하여 새로운 객체를 생성하면, 두 번째 부터는 처음 만들어진 객체를 얻게 된다.
- 자바스크립트에 싱글톤 패턴을 어떻게 적용할까?
    - 자바스크립트에는 클래스가 없고 오직 객체만 있다.
    - 새로운 객체를 만들면 실제로 이 객체는 다른 객체와도 같지 않기 때문에 이미 '싱글톤'
    - 객체 리터럴로 만든 단순한 객체 (싱글톤의 예)
    ```javascript
    var obj = {
        myProp: 'myValue'
    };
    ```
    - 자바스크립트에서 객체들은 동일한 객체가 아니고서는 절대로 같을 수 없다!
    - 완전히 같은 멤버를 가지는 똑같은 객체를 만들더라도 이 객체가 동일하지는 않아.
    ```javascript
    var obj2 = {
        myProp: 'myValue'
    }
    obj === obj2 // false
    obj == obj // false
    ```
- 자바스크립트에서 객체 리터럴을 이용해 객체를 생성할 때마다 사실은 싱글톤을 만드는 것이고, 싱글톤을 만들기 위한 별도의 문법이 존재하지 않는다.
- 자바스크립트문맥에서 '싱글톤'이라고 얘기하는 것은, 모듈 패턴을 뜻하기도 한다.

#### new 사용하기
- 자바스크립트에는 클래스가 없다.
- 자바스크립트에는 생성자 함수를 사용해 객체를 만드는 new구문이 있고, 때로는 이 구문을 사용해서 싱글톤을 구현하고자 할 수 있다.
- 동일한 생성자로 new를 사용해서 여러 개의 객체를 만들 경우, 셀제로는 동일한 객체에 대한 새로운 포인터만 반환하도록 구현
- 다음의 코드는 우리가 기대하는 동작 방식을 보여준다.
    ```javascript
    var uni = new Universe();
    var uni2 = new Universe();

    uni === uni2 // true
    ```
    - new로 생성한 인스턴스 객체가 같으려면??
        - 객체의 인스턴스인 this가 생성되면 Universe 생성자가 이를 캐시한 후, 그 다음 번에 생성자가 호출되었을 때 캐시된 인스턴스를 반환하게 하면 된다.
        - 이를 위해 몇가지 선택사항
            - 인스턴스를 저장하기 위해 전역 변수 사용. 일반적인 원칙상 전역변수 선언은 좋지 않기 때문에 이 방법을 추천하지 않음. 누군가 실수로 이 전역변수를 덮어 쓸 수도 있다.
            - 생성자의 스태틱 프로퍼티에 인스턴스를 저장한다. 자바스크립트에서 함수는 객체이므로, 프로퍼티를 가질 수 있다. Universe.instance와 같은 프로퍼티에 인스턴스를 저장할 수 있다. 깔끔하고 괜찮은 방법이지만 instance 프로퍼티가 공개되어 있기 때문에, 외부 코드에서 값을 변경하면 인스턴스를 잃어버릴 수 있다는 한 가지 단점이 있다.
            - 인스턴스를 클로저로 감싼다. 이 방법은 인스턴스를 비공개로 만들어 생성자 외부에서 수정할 수 없게 해준다. 추가적인 클로저가 단점!
#### 스태틱 프로퍼티에 인스턴스 저장하기
- 샘플코드) chapter7/singleton-02.html 참고
- Universe 생성자의 스태틱 프로퍼티 내부에 단일 인스턴스를 저장하는 예제
    ```javascript
    function Universe() {
        // 이미 인스턴스가 존재하는가?
        if (typeof Universe.instance === 'object') {
            return Universe.instance;
        }

        // 정상적으로 진행한다.
        this.start_time = 0;
        this.band = "Big";

        // 인스턴스를 캐시한다.
        Universe.instance = this;

        // 함축적인 반환
        // return this;
    }

    // 테스트
    var uni = new Universe();
    var uni2 = new Univeerse();
    uni === uni2; // true
    ```
- Universe.instance에 스태틱한 프로퍼티를 지정해 준다.
- 단점) instance가 공개되어있다!
#### 클로저에 인스턴스 저장하기
- 샘플코드) chapter7/singleton-03.html 참고
- 클래스 방식의 싱글톤을 만든느 또다른 방법은 클로저를 사용해 단일 인스턴슬르 보호하는 방법
    ```javascript
    function Universe() {
        // 캐싱된 인스턴스
        var instance = this;

        // 정상적으로 진행
        this.start_time = 0;
        this.band = "Big";

        // 생성자를 재작성 한다.
        Universe = function () {
            return instance;
        };
    }

    // 테스트
    var uni = new Universe();
    var uni2 = new Universe();
    uni === uni2; // true
    ```
- 비공개 스태틱 멤버 패턴 사용
- 자기자신을 정의하는 함수 패턴
    - 단점) 재작성된 함수는 재정의 시점 이전에 원본 생성자에 추가된 프로퍼티를 잃어버린다는 점.
    - Universe()의 프로토타입에 무언가를 추가해도 원본 생성자로 생성된 인스턴스와 연결되지 않는다.
    ```javascript
    // 프로토타입에 추가
    Universe.prototype.nothing = true;

    var uni = new Universe();

    // 첫번째 객체가 만들어진 이후
    // 다시 프로토타입에 추가
    Universe.prototype.everything = true;

    var uni2 = new Universe();

    uni.nothing; // true
    uni2.nothing; // true
    uni.everything; // undefined
    uni2.everything; // undefined

    uni.constructor.name; // "Universe"
    uni.constoructor === Universe; // false
    ```
    - uni.constructor === Universe  // false 이유는?
        - uni.contstructor가 더이상 Universe() 생성자와 같지 않은 이유는 uni.constructor가 재정의된 생성자가 아닌 원본 생성자를 가리키고 있기 때문.
    - 프로토타입 생성자 포인터가 제대로 동작하도록 수정해보자!
        - 샘플코드) chapter7/singleton-04.html 참고
### 7.2 팩터리(Factory)
- 샘플코드) chapter7/factory-01.html 참고
- 팩터리 패턴의 목적은 객체들을 생성하는 것.
- 클래스 내부에서 또는 클래스의 스태틱 메서드로 구현
- 팩터리 패턴의 목적
    - 비슷한 객체를 생성하는 반복 작업 수행
    - 팩터리 패턴의 사용자가 컴파일 타임에 구체적인 타입(클래스)을 모르고도 객체 생성 가능
        - 정적 클래스 언어에서 중요
        - 정적 클래스 언어에서는 컴파일 타임에 클래스에 대한 정보 없이 인스턴스를 생성하기 쉽지 않다.
- 팩터리 메서드로 만들어진 객체들은 의도적으로 동일한 부모 객체를 상속한다.
    - 특화된 기능을 구현하는 서브 클래스들.
- 구현 예제
    - CarMaker 생성자 : 공통의 부모
    - CarMaker.factory() : car객체들을 생성하는 스태틱 메서드
    - CarMaker.Compact, CarMaker.SUV, CarMaker.Convertible : CarMaker를 상속하는 특화된 생성자. 이 모두는 부모의 스태틱 프로퍼티로 정의되어 전역 네임스페이스를 깨끗하게 유지하며, 필요할 때 쉽게 찾을 수 있다.

    ```javascript
    var corolla = CarMaker.factory('Compact');
    var solstice = CarMaker.factory('Convertible');
    var cherokee = CarMaker.factory('SUV');
    corolla.drive();
    solstice.drive();
    cherokee.drive();
    ```
    - var corolla = CarMaker.factory('Compact');
        - 런타임시 문자열로 타입을 받아 해당 타입의 객체를 생성하고 반환한다.
        - new 와 함꼐 생성자를 사용하지 않고, 객체 리터럴도 보이지 않는다.
        - 문자열로 식별되는 타입에 기반하여 객체들을 생성하는 함수가 있다.
    - 팩터리 패턴 구현 예
    ```javascript
    // 부모 생성사
    function CarMaker() {}

    // 부모의 메서드
    CarMaker.prototype.drive = function () {
        return `Vroom, I have ${this.doors} doors.`;
    };

    // 스태틱 factory 메서드
    CarMaker.factory = function (type) {
        var constr = ty;e,
            newcar;
        
        // 생성자가 존재하지 않으면 에러 발생
        if (typeof CarMaker[constr] !== 'function') {
            throw {
                name: 'Error',
                message: `${constr} doesn't exist`
            };
        }

        // 생성자의 존재를 확인했으므로 부모를 상속한다.
        // 상속은 단 한번만 실행하도록 한다.
        if (typeof CarMaker[constr].prototype.drive !== 'function') {
            CarMaker[constr].prototype = new CarMaker();
        }

        // 새로운 인스턴스를 생성한다.
        newcar = new CarMaker[constr]();

        // 다른 메서드 호출이 필요하면 여기서 실행한 후, 인스턴스를 반환
        return newcar;
    };

    // 구체적인 자동차 메이커들을 선언한다.
    CarMaker.Compact = function () {
        this.doors = 4;
    };
    CarMaker.Convertible = function () {
        this.doors = 2;
    };
    CarMaker.SUV = function () {
        this.doors = 24;
    };

    ```
#### 내장 객체 팩터리
- 자바스크립트에서 내장된(built-in) 전역 Object()생성자를 생각해보자
    - 입력값에 따라 다른 객체를 생성하기 떄문에 '팩터리처럼 동작'한다고 볼수 있다.
    - 숫자 원시 데이터 타입을 전달하면, 이 생성자는 내부적으로 Number()생성자로 객체를 만든다.
    - 문자열, 불린 값도 동일하게 적용
- 몇가지 예제와 테스트 해보자
    - 샘플코드) chapter7/factory-02.html 참고
    ```javascript
    var o = new Object(),
        n = new Object(1),
        s = Object('1'),
        b = Object(true);
    
    // 테스트
    o.constructor === Object;
    n.constructor === Number;
    s.constructor === String;
    b.constructor === Boolean;
    ```
### 7.3 반복자(Iterator)
- 샘플코드) chapter7/iterator.html 참고
- 반복자 패턴에서, 객체는 일종의 집합적인 데이터를 가진다.
- 데이터가 저장된 내부구조는 복잡하더라도 개별 요소에 쉽게 접근할 방법이 필요할 것이다.
- 객체의 사용자는 데이터가 어떻게 구조화 되었는지 알 필요가 없고 개별 요소로 원하는 작업을 할수만 있으면 된다.
- 반복자 패턴에서, 객체는 next()메서드를 제공한다. next()를 연이어 호출하면 반드시 다음 요소를 반환해야 한다.
    ```javascript
    var element;
    while(element = agg.next()) {
        // element로 어떤 작업을 수행한다.
        console.log(element);
    }
    ```
- 반복자 패턴에서 객체는 보통 hasNext()라는 편리한 메서드도 제공한다.
    -  객체의 사용자는 이 메서드로 데이터의 마지막에 다다랐는지 확인 가능
    ```javascript
    while (agg.hasNext()) {
        // 다음 요소로 어떤 작업을 수행한다.
        console.log(agg.next());
    }
    ```
- 반복자 패턴을 구현할 때, 데이터는 물론 다음에 사용할 요소를 가리키는 포인터(인덱스)도 비공개로 저장해두는 것이 좋다.
    - 데이터는 단순한 보통의 배열이고, 다음번 순서의 요소를 가져오는 Next()배열 요소를 하나 걸러 반환한다고 가정하자.
    ```javascript
    var agg = (function () {
        var index = 0,
            data = [1, 2, 3, 4, 5],
            length = data.length;
        
        return {
            next: function () {
                var element;
                if (!this.hasNext()) {
                    return null;
                }
                element = data[index];
                index = index + 2;
                return element;
            },
            hasNext: function () {
                return index < length;
            },
            rewind: function () {
                // 포인털르 다시 처음으로 돌림
                index = 0;
            },
            current: function () {
                // 현재 요소 반환
                // next()는 포인터를 전진시키기 때문에 이 작업을 할 수 없다.
                return data[index];
            }
        };
    })();

    while(agg.hasNext()) {
      console.log(agg.next());
    }

    agg.rewind();
    console.log(agg.current()) // 1
    ```
### 7.4 장식자(Decortaor)
- 장식자 패턴을 이용하면 런타임시 부가적인 기능을 객체에 동적으로 추가할 수 있다.
- 스태틱 클래스에서는 쉽지 않은 작업
    - 객체를 변형할 수 있는 자바스크립트에서는 객체에 기능을 추가하는 절차에 아무런 문제가 없다.
- 장식자 패턴의 편리한 특징은 기대되는 행위를 사용자화 하거나 설정할수 있다는 것이다.
    - 처음에는 기본적인 몇 가지 기능을 가지는 평범한 객체로 시작
    - 사용 가능한 장식자들의 풀에서 원하는 것을 골라 객체에 기능을 덧붙여 간다.
    - 순서가 중요하다면 어떤 순서로 기능을 추가할지도 지정 가능.
#### 사용 방법
- 어떤 물건을 파는 웹 애플리케이션 제작
- 각각의 새로운 판매건은 새로운 sale객체
- sale객체는 상품의  가격을 알고있으며, sale.getPrice()메서드를 호출하면 해당 가격을 반환
- 상황에 따라 추가기능으로 객체 장식 가능
- 예제 시나리오
    - 캐나다의 퀘백 지방에 있는 소비자에게 물건을 판매하는 시나리오
    - 소비자는 연방세와 퀘백의 지방세 지불
    - 장식자 패턴에 따르면, 연방세 장식자와 퀘백 지방세 장식자로 객체를 '장식한다'라고 말할 수 있다.
    - 통화 형식을 지정한느 기능으로 장식
    ```javascript
    var sale = new Sale(100);
    sale = sale.decoreate('fedtax');
    sale = sale.decorate('quebec');
    sale = sale.decorate('money');
    sale.getPrice();
    ```
    - 또 다른 시나리오로 소비자가 지방세가 없는 지역에 있고 통화 형식은 캐나다 달러 형식으로 하고 싶다고 하자!
    ```javascript
    var sale = new Sale(100);
    sale = sale.decorate('fedtax');
    sale = sale.decorate('cdn');
    sale.getPrice();
    ```
- 장식자 패턴은 런타임시 기능을 추가하고 객체를 변경하는 유연한 방법
#### 구현
- 샘플코드) chapter7/decorator-01.html 참고
- 장식자 패턴을 구현하기 위한 방법
    - 모든 장식자 객체에 특정 메서드를 포함시킨 후, 이 메서드를 엎어쓰게 만드는 것.
        - 각 장식자는 사실 이전의 장식자로 기능이 추가된 객체를 상속
        - 장식 기능을 담당하는 메서드들은 superclass(상속된 객체)에 있는 동일한 메서드를 호출하여 값을 가져온 다음 추가 작업을 덧붙이는 방식
- 결과적으로, 첫번째 예제에서 sale.getPrice()를 호출하면 money장식자의 동일한 메서들르 호출한 셈.
    - 그러나 각각 꾸며진 메서드는 우선 부모의 메서드를 호출하기 때문에, money의 getPrice(), quebec의 getPrice()를 우선 호출하게됨.
```javascript
funcgtion Sale(price) {
    this.price = price || 100;
}
Sale.prototype.getPrice = function () {
    return this.price;
};
```
- 장식자 객체들은 생성자 프로퍼티 Sale.decorators의 프로퍼티로 구현
```javascript
Sale.decorators = {};
```
- 이 장식자 객체는 getPrice()메서드를 특화하여 구현
    - 이 메서드가 처음에는 부모의 메서드로부터 값을 가져온 다음 그 값을 변경
    ```javascript
    Sale.decorators.fedtax = {
        getPrice: function () {
            var price = this.superclass.getPrice();
            price += price * 5 / 100;
            return price;
        }
    };
    ```
    - 이런 방법으로 장식자를 얼마든지 구현가능.
        - 이 장식들은 플러그인 처럼 Sale()의 핵심 기능을 확장하여 구현할 것이다.
        - 별도의 파일에서 개발할 수 도있고 서드파티 개발자와 공유할 수도 있다.
    ```javascript
    Sale.decorators.quebec = {
        getPrice: function () {
            var price = this.superclass.getPrice();
            price += price * 7.5 / 100;
            return price;
        }
    };
    Sale.decorators.money = {
        getPrice: function () {
            return `$${this.superclass.getPrice().toFixed(2)}`;
        }
    };
    Sale.decorators.cdn = {
        getPrice: function () {
            return `CDN$ ${this.superclass.getPrice().toFixed(2)}`;
        }
    };
    ```
    - decorate() 메서드 구현
    ```javascript
    Sale.prototype.decorate = function (decorator) {
        var F = function () {},
            overrides = this.constructor.decorators[decorator],
            i, newobj;
        F.prototype = this;
        newobj = new F();
        newobj.superclass = F.prototype;
        for (i in overrides) {
            if (overrides.hasOwnProperty(i)) {
                newobj[i] = overrides[i];
            }
        }
        return newobj;
    };
    ```
    - decorate()는 다음과 같이 호출
    ```javascript
    sale = slae.decorate('fedtax');
    ```
#### 목록을 사용한 구현
- 샘플코드) chapter7/decorator-01.html 참고
- 자바스크립트의 동적 특성을 최대한 활용하며 상속은 전혀 사용하지 않는다.
- 꾸며진 메서드가 체인 안에 있는 이전의 메서들르 호출하는 대신에, 간단하게 이전 메서드의 결과를 다음 메서드에 매개변수 전달.
- 이 구현 방법은 장식을 취소하거나 제거하기 쉽다.
- 장식자 목록에서 요소를 삭제하기만 하면된다.
```javascript
var sale = new Sale(100);
sale.decorate('fedtax');
sale.decorate('quebec');
sale.decorate('money');
sale.getPrice();

function Sal(eprice) {
    this.price = price || 100;
    this.decorators_list = [];
}

Sale.decorators = {};
Sale.decorators.fedtax = {
    getPrice: function (price) {
        return price + price * 5 / 100;
    }
};
Sale.decorators.quebec = {
    getPrice: function (price) {
        return price + price * 7.5 / 100;
    }
};
Sale.decorators.money = {
    getPrice: function (price) {
        return `$${price.toFixed(2)}`;
    }
};
```
- 여기서는 decorators의 getPrice()메서드가 간단해졌다.
- 프로토타입의 decorate(), getPrice() 메서드 변경
```javascript
Sale.prototype.decorate = function (decorator) {
    this.decorators_list.push(decorator);
};
Sale.prototype.getPrice = function () {
    var price = this.price,
        i, max = this.decorators_list.length,
        name;
    
    for (i = 0; i < max; i += 1) {
        name = this.decorators_list[i];
        price = Sale.decorators[name].getPrice(price);
    }
    return price;
};
```
- 장식되기로 동의한 메서드만 모든 작업이 수행된다.
### 7.5 전략
- 전략 패턴은 런타임에 알고리즘을 선택할 수 있게 해준다.
- 사용자가 동일한 인터페이스를 유지하면서, 특정한 작업을 처리할 알고리즘을 여러 가지 중에서 상황에 맞게 선택할 수 있다.
- 전략 패턴을 사용하는 예제 : 폼 유효성 검사
    - validate() 메서드를 가지는 validator객체를 만듦.
    - 이 메서드는 폼의 특정한 타입에 관계 없이 호출되고, 항상 동일한 결과, 즉 유효성 검사를 통과하지 못한 데이터 목록과 함께 에러 메시지를 반환.
    - 사용자는 구체적인 폼과 검사할 데이털르 따라서 다른 종류의 검사 방법을 선택 가능.
    - 유효성 검사기가 작업을 처리할 최선의 '전략'을 선택
    - 그에 해당하는 적절한 알고리즘에 실질적인 데이터 검증 작업 위임.
#### 데이터 유효성 검사 예제
- 샘플코드) chapter7/strategy.html 참고
- 웹 페이지상 폼에서 가져온 데이터
    ```javascript
    var data = {
        first_name: 'Super',
        last_name: 'Man',
        age: 'unknown',
        username: 'o_O'
    };
    ```
- 우선 설정을 통해 어떤 데이터를 유효한 데이터로 받아 들일지 규칙을 지정
    - 이름(first_name)은 어떤 값이어도 상관 X
    - 성(last_name)은 필수 값이 아니다.
    - 나이(age)는 숫자
    - 사용자명(username)은 특수문자를 제외한 글자와 숫자로만 이루어져야 한다.
- 위에 대한 규칙을 설정
    ```javascipt
    validator.config = {
        first_name: 'isNonEmpty',
        age: 'isNumber',
        username: 'isAlphaNum'
    };
    ```
- 유효성 검사기(validator)객체가 데이터를 처리할 수 있도록 설정되었으니, validate()메서드를 호출하여 검증 오류가 발생하는지 콘솔에 출력
    ```javascript
    validator.validate(data);
    if (validator.hasErrors()) {
        console.log(validator.message.join('\n'));
    }
    ```
    - 이 코드는 다음과 같은 에러메세지를 출력한다.
        - '나이'값이 유효하지 않습니다. 숫자만 사용할 수 있습니다. 예: 1, 3.14, 2010
        - '사용자명'값이 유효하지 않습니다. 특수 문자를 제외한 글자와 숫자만 사용할 수 있습니다.
- 유효성 검사기(validator)객체가 어떻게 구현될까?
    - 검사에 사용되는 알고리즘 객체들은 사전에 정의된 인터페이스를 가진다.
    - 이 객체들은 validate()메서드와 에러 메시지에서 사용될 한 주 ㄹ짜리 도움말 정보인 instructions프로퍼티 제공
    ```javascript
    // 값을 가지는지 확인
    validator.types.isNonEmpty = {
        validate: function (value) {
            return value !== '';
        },
        instructions: '이 값은 필수 입니다.'
    };
    // 숫자 값인지 확인
    validator.types.isNumber = {
        validate: function (value) {
            return !isNaN(value)
        },
        instructions: '숫자만 사용할 수 있습니다. 예: 1, 3.14 or 2010'
    };
    // 값이 문자와 숫자로만 이루어져 있는지 확인
    validator.types.isAlphaNum = {
        validate: function () {
            return !/[^a-z0-9]/i.test(value);
        },
        instructions: '특수 문자를 제외한 글자와 숫자만 사용할 수 있습니다.'
    };
    ```
- validator객체 구현
    ```javascript
    var validator = {
        // 사용할 수 있는 모든 검사 방법들
        types: {},

        // 현재 유효성 검사 세션의 에러 메세지들
        messages: [],

        // 현재 유효성 검사 세션의 에러 메시지들
        // '데이터 필드명: 사용할 검사 방법'의 형식
        config: {},

        // 인터페이스 메서드
        // data는 이름 => 값 쌍
        validate: function (data) {
            var i, msg, type, checker, result_ok;

            // 모든 메세지를 초기화
            this.messages = [];

            for (i in data) {
                if (data.hasOwnProprty(i)){
                    type = this.config[i];
                    checker = this.types[type];

                    if (!type) {
                        continue; // 설정된 검사 방법이 없을 경우 건너뛰기
                    }

                    if (!checker) { // 설정이 존재하나 해당하는 검사 방법을 찾을 수 없는 경우
                        throw {
                            name: 'ValidationError',
                            message: `${type}값을 처리할 유효성 검사기가 존재하지 않습니다.`
                        };
                    }
                    result_ok = checker.validate(data[i]);
                    if (!result_ok) {
                        msg = `'${i}'값이 유효하지 않습니다. ${checker.instructions}`;
                        this.messages.push(msg)
                    }
                }
            }
            return this.hasErrors();
        },
        // 도우미 메서드
        hasErrors: function () {
            return this.messages.length !== 0;
        }
    };
    ```
### 7.6 퍼사드(Facade)
- 퍼사드 패턴은 객체의 대체 인터페이스를 제공한다.
- 메서드를 짧게 유지하고 하나의 메서드가 너무 많은 작업을 처리하지 않게 하는 방법은 설계상 좋은 습관
- 하지만 이렇게 하다보면 메서드 숫자가 엄청나게 많아지거나 superclass 메서드에 엄청나게 많은 매개변수를 전달하게 될 수있다.
- 두 개 이상 메서드가 함께 호출되는 경우가 많다면, 이런 메서드 호출들을 하나로 묶어주는 새로우 메서드를 만드는게 좋다.
- 브라우저 이벤트를 처리할 때 사용하는 메서드
    - stopPropagation() : 이벤트가 상위 노드로 전파되지 않게 중단
    - prevetDefault() : 브라우저의 기본 동작 막기
        - 예를 들어, 지정된 링크로 이동하거나 폼을 전송하지 못하기 함.
- 위의 브라우저 이벤트 관련하여 사용되는 메서드들은 함께 사용될때가 많다.
    - 퍼사드 패턴을 사용해서 이 둘을 묶는 메서드를 생성하자!
    ```javascript
    var myevent = {
        stop: function (e) {
            e.preventDefault();
            e.stopPropagation();
        }
    };
    ```
- 퍼사드 패턴은 브라우저 스크립팅에더 적합
    - 브라우저 간의 차이점을 퍼사드 뒤편에 숨길 수 있기 때문
    - IE에서의 이벤트 API의 차이를 처리하는 코드를 추가해보자
    ```javascript
    var myevent = {
        stop: function (e) {
            // IE이외의 모든 브라우저
            if (typeof e.preventDefault === 'function') {
                e.preventDefault();
            }
            if (typeof e.stopPropagation === 'function') {
                e.stopPropagation();
            }
            // IE
            if (typof e.returnValue === 'boolean') {
                e.returnValue = false;
            }
            if (typeof e.cancelBubble === 'boolean') {
                e.cancelBubble = true;
            }
        }
    };
    ```
- 해당 부분 최종 교체시 변경폭을 줄일 수 있다.
### 7.7 프록시(Proxy)
- 하나의 객체가 다른 객체에 대한 인터페이스로 동작한다.
- 퍼사드 패턴이 메서드 호출 몇개를 결합시켜 펀의를 제공하는 것에 불과하다면, 프록시는 클라이언트 객체와 실제 대상 객체 사이에 존재하면서 접근을 통제한다.
- 이 패턴은 비용이 증가하는 것처럼 보일 수 있찌만 실제로는 성능 개선에 도움을 준다.
- 프록시는 실제 대상 객체를 보호하여, 되도록 일을 적게 시키기 떄문
- 프록시 패턴의 예) 게으른 초기화(Lazy initialization)
    - 객체를 초기화 하는데 많은 비용이 들지만, 실제로 초기화 한 후에는 한번도 사용하지 않는다고 해보자.!
- 프록시는 초기화 요청을 대신 받지만, 실제 대상 객체가 정말로 사용되기 전까지는 이 요청을 전달하지 않는다.
    - 동작이 필요한 시점이 되면 프록시가 초기화와 동자가 요청을 한꺼번에 전달한다.
#### 예제
- 샘플코드) chapter7/proxy.html 참고 (미완)
- 프록시 패턴은 실제 대상 객체가 비용이 많이 드는 작업을 할 때 유용.
- 네트워크 요청은 웹 애플리케이션에서 가장 비용이 많이 든느 작업중 하나.
    - 가능한 많은 http요청들을 하나로 결합하는게 효과적
#### 프록시를 사용해 요청 결과 캐시하기
- 프록시의 새로운 cache 프로퍼티에 이전 요청의 결과를 캐시해두면 실제 http객체를 더욱 보호할 수 있다.
- 만약 videos객체가 동일한 동영상 ID에 대한 정보를 다시 요청하면, 프록시는 캐시된 결괄르 반환해서 네트워크 라운드트립을 줄인다.
### 7.8 중재자
- 크기에 상관 없이 애플리케이션은 독립된 객체들로 만들어진다.
- 객체간의 통신은 유지보수가 쉽고 다른 객체를 건드리지 않으면서, 애플리케이션의 일부분을 안전하게 수정할 수 있는 방식으로 이루어져야한다.
- 애플리케이션이 점차 커져가면서, 더욱 더 많은 객체들이 추가된다.
- 애플리케이션을 리팩토링하는 동안, 객체들이 제거되거나 재배치되기도 한다.
- 객체들이 강하게 결합되면, 다른 객체들에 영향으 ㄹ주지 않고 하나의 객체를 수정하기가 어렵다.
- 중재자 패턴은 결합도를 낮추고 유지보수룰 쉽게 개선하여 이런 문제를 안화시킨다.
    - 독립던 동료 객체들은 직접 통신하지 않고, 중재자 객체를 거친다.
    - 동료 객체들은 자신의 상태가 변경되면 중재아게 알린다.
    - 중재자는 이 변경사항을 알아야 하는 다른 동료 객체들에게 알린다.
#### 중재자 패턴 예제
- 샘플코드) chapter7/mediator.html 참고
- 중재는 모든 객체에 대해 알고 있다.
- 중재자 이외의 객체들은, 다른 객체들에 대해 전혀 알지 못한다.
     - 추가, 삭제 쉽다.
### 7.9 감시자(Observer)
- 감시자 패턴은 클라이언트 측 자바스크립트 프로그래밍에서 널리 사용되는 패턴
- mouseover, keypress와 같은 모든 브라우저 이벤트가 감시자 패턴의 예
- 커스텀 이벤트라고도 부름.
    - 브라우저가 발생시키는 이벤트가 아닌 프로그램에 의해 만들어진 이벤트
- 구독자/발행자 패턴이라고도 부름.
- 주요 목적 : 결합도 낮추기
- 어떤 객체가 다른 객체의 메서드를 호출하는 대신, 객체의 특별한 행동을 구독해 알림을 받는다.
- 구독자(subscriber)는 감시자(observer)라고도 부르며, 관찰되는 객체가 발행자라고 함.
- 발행자는 중요한 이벤트 발생 시 모든 구독자에게 알려주며(구독자 호출) 주로 이벤트 객체의 형태로 메시지 전달
#### 예제 #1: 잡지 구독
- 샘플코드) chapter7/observer-01.html 참고 (미완)
#### 예제 #2: 키 누르기 게임
- 샘플코드) chapter7/observer-02.html 참고 (미완)
### 7.10 요약
##### 싱글톤 (Singleton)
- '클래스'의 인스턴슬르 단 하나만 생성한다. 생성자 함수로 클래스의 개념을 대체하고 자바와 비슷한 문법을 유지하고 싶은 경우에 쓸 수 있는 몇가지 접근 방법
    - 자바스크립트에서 모든 객체는 싱글톤.
    - 개발자가 말하는 '싱글톤'은 때로는 모듈 패턴으로 만들어진 객체
##### 팩토리 (Factory)
- 런타임 시 객체 타입을 문자열로 지정해 객체들을 생성하는 메서드를 가리킨다.
##### 반복자 (Iterator)
- 복잡한 데이터 구조를 순회하거나 순차적으로 이동하는 API제공
##### 장식자 (Decorator)
- 사전에 정의된 데코레이터 객체를 사용해 런타임에 객체에 기능을 추가한다.
##### 전략 (Strategy)
- 인터페이스를 동일하게 유지하면서 지정된 작업(컨텍스트)을 처리학 위한 최선의 전략을 선택
##### 퍼사드 (Facade)
- 자주 사용되는 (또는 설계가 제대로 되지 않은) 메서드들을 감싸 새로운 메서드를 만들어, 좀 더 편리한 API를 제공
##### 프록시 (Proxy)
- 객체를 감싸 객체에 대한 접근을 통제한다. 비용이 큰 작업을 줄이기 위해 작업들을 하나로 묶거나, 정말 필요할 때만 실행하게 해준다.
##### 중재자 (Mediator)
- 객체들이 서로 직접 통신하지 않고 오직 중재자 객체를 통해서만 통신하도록 함으로써 결합도로 낮춘다.
##### 감시자
- '감시 가능한'객체들을 만들어 결합도를 낮춘다.
- 이 객체는 특정 이벤틀르 감시하고 있는 모든 감시자들에게 그 이벤트가 발생했을 때 알려준다. (구독자/발행자 또는 커스텀 이벤트 패턴 이라고 함.)
## Chapter 8 - DOM과 브라우저 패턴
### 8.1 관심사릐 분리
- 웹 애플리케이션 개발에서 주요 관심사 세가지
    - 내용 : HTML 문서
    - 표현 : CSS 스타일 - 문서가 어떻게 보여질 것인지 지정
    - 행동 : 자바스크립트 - 사용자 인터랙션과 문서의 동적인 변경 처리
- 위 세가지 관심사를 분리할수록, 좀 더 광범위한 사용자 에이전트(그래픽 브라우저, 텍스트만 지원하는 브라우저, 장애인을 위한 보조공학기기, 모바일 기기 등)에 애플리케이션을 탑재하기가 용이
- 관심사의 분리는 실무에서 어떤 의미일까?
    - CSS를 끈 상태에서 페이지를 테스트 한다. 이 상태로도 사용 가능하고 내용이 표시되며 읽을 수 있어야 한다.
    - 자바스크립트를 끈 상태에서 페이지를 테스트 한다. 여전히 주 목적에 맞게 제대로 동작하고, 모든 링크가 작동하며, 폼 또한 제대로 동작하고 전송할 수 있어야 한다.
    - onclick과 같은 인라인 이벤트 핸들러 또는 인라인 style속성은 '내용'에 속하지 않으므로 사용하지 않는다.
    - 시맨틱하고 의미에 맞는 HTML 엘리먼트를 사용한다. 예를 들어 제목에는 <h1>또는 <h2>를 목록에서 <ol> 또는 <ul>를 사용
```javascript
// 안티패턴 : 사용자 에이전트 감지
if (navigator.userAgent.indexOf('MSIE') !== .1) {
    document.attachEvent('onclick', console.log);
}

// 더 좋은 방법
if (document.attachEvent) {
    document.attachEvent('onclick', console.log);
}

// 조금 더 정확한 방법
if (typeof document.attachEvent === 'undefined') {
    document.attachEvent('onclick', console.log);
}
```
### 8.2 DOM 스크립팅
- 페이지의 DOM트리를 다루는 것은 클라이언트 측 자바스크리립트에서 처 리하는 가장 흔한 일
- DOM메서드가 브라우저간에 일관성 없이 구현되어 있기 떄문에 어렵기도하지.
- 브라우저간 차이점을 추상화 한 훌륭한 자바 스크립트 라이브러리를 사용하면 개발 속도가 크게 향상될 수 있어!

- DOM트리에 접근하고, 수정할 때 사용할 수 있는 몇가지 패턴을 살펴보자
#### DOM 접근
- DOM접근은 비용이 많이 들어
- DOM은 자바스크립트 엔진과 별개로 구현되었기 떄문이다.
- 자바스크립트 애플리케이션에서 DOM을 전혀 사용하지 않을 수도 있기 때문에, 브라우저 입장에서 보면 이런 접근 방식이 타당하다.
- DOM 접근을 최소화 해야한다.
    - 루프 내에서 DOM접근을 피한다.
    - DOM 참조를 지역변수에 할당하여 사용한다.
    - 가능하면 셀렉터 API를 사용한다.
    - HTML 콜렉션을 순회할 때 length를 캐시하여 사용한다.
- 코드가 좀 길어지긴 했지만 브라우저에 따라 수십에서 수백배 빠른 예제
    ```javascript
    // 안티패턴
    for (var i = 0; i < 100; i += 1) {
        document.getElementById('result').innerHTML += `${i}, `;
    }

    // 지역 변수를 활용하는 개선안
    var i, content = '';
    for (i = 0; i < 100; i += 1) {
        content += `${i}, `;
    }
    document.getElementById('result').innerHTML += content;

    // 안티패턴
    var padding = document.getElementById('result').style.padding,
        margin = document.getElementById('result').style.margin;
    
    // 개선안
    var style = document.getElementById('result').style,
        padding = style.padding,
        margin = style.margin;
    
    document.querySelector('ul .selected');
    document.querySelectorAll('#widget .class');

    // id로 찾는게 가장 쉽고 빠른 방법
    document.getElementById(myid);
    ```
#### DOM 조작
- DOM 엘리먼트 접근 이외에도, DOM 엘리먼트를 변경 또는 제거하거나 새로운 엘리먼트를 추가하는 작업도 자주 필요하다.
- DOM 업데이트 시 브라우저는 화면을 다시 그리고(repaint), 엘리먼트들을 재구조화(reflow)하는데, 이 또한 비용이 많이 드는 작업.
- DOM 업데이트를 최소화 하는게 좋다.
    - 변경 사항들을 일괄 처리
    - 실제 문서 트리 외부에서 변경 작업을 수행
    - 큰 서브 트리를 만들어야 한다면, 서브 트리를 완전히 생성한 다음에 문서에 추가
    - document fragment에 모든 하위 노드를 추가하는 방법
    ```javascript
    // 안티패턴 : 노드를 만들고 곧바로 문서에 붙인다.
    var p, t;

    p = document.createElement('p');
    t = document.createTextNode('first paragraph');
    p.appendChild(t);
    document.body.appendChild(p);

    p = document.createElement('p');
    t = document.createTextNode('second paragraph');
    p.appendChild(t);
    document.body.appendChild(p);
    ```
    - 개선안 : 문서 조각을 생성해 외부에서 수정한 후, 처리가 완전히 끝난 다음에 실제 DOM에 추가하는 것.
    - DOM 트리에 문서 조각을 추가하면, 조각 자체는 추가되지 않고 그 내용만 추가
    - 문서 조각은 별도의 부모 노드 없이 여러 개의 노드를 감쌀 수 있는 훌륭한 방법.
    - 문서조각(document fragment) 사용 예제
    ```javascript
    var p, t, frag;
    frag = document.createDocumentFragment();

    p = document.createElement('p');
    t = document.createTextNode('first paragraph');
    p.appendChild(t);
    frag.appendChild(p);

    p = document.createElement('p');
    t = document.craeteTextNode('second paragraph');
    p.appendChild(t);
    frag.appendChild(p);

    document.body.appendChild(frag);
    ```
    - 이 문서 조각 방식은 새로운 노드를 트리에 추가할 때 유용
- 문서에 이미 존재하는 트리를 변경할 떄는 어떤 방식으로 일괄 변경할 수 있을까?
    ```javascript
    var oldnode = document.getElementById('result'),
        clone = oldnode.cloneNode(true);

    // 복제본을 가지고 변경 작업을 처리한다.
    // 변경이 끝나고 나면 원래의 노드와 교체한다.
    oldnode.parentNode.replaceChild(clone, oldnode);

    // replaceWith 사용
    oldnode.replaceWith(clone);
    ```
### 8.3 이벤트
- 브라우저별 이벤트 처리는 최악의 일관성
#### 이벤트 처리
- 우선 엘리먼트에 이벤트 리스너를 붙이는 것으로 시작
- 클릭할 떄마다 카운터의 숫자를 증가시키는 버튼이 있는데, 인라인 onclick으로 속성을 추가하면 모든 브라우저에서 잘 동작하겠지만, 관심사의 분리와 점진적인 개선의 원칙에 위배된다.
- 마크업을 건드리지 않고 항상 자바스크립트에서 이벤트 리스너를 처리해야 한다.
    ```html
    <button id="clickme">Click me: 0</button>
    ```
    ```javascript
    var b = document.getElementById('clickme'),
        count = 0;
    b.onclick = function () {
        count += 1;
        b.innerHTML = `Click me: ${count}`;
    };
    ```
#### 이벤트 위임
### 8.4 장시간 수행되는 스크립트
#### setTimeout()
#### 웹 워커
### 8.5 원격 스크립팅
#### XMLHttpRequest
#### JSONP
#### 프레임과 이미지 비컨(Image Becons)
### 8.6 자바스크립트 배포
#### 스크립트 병합
#### 코드 압축과 gzip 압축
#### Expires 헤더
#### CDN 사용
### 8.7 로딩 전략
#### <script> 엘리먼트 위치
#### HTTP Chunked 인코딩 사용
#### 다운로드 차단하지 않은 동적인 <script>엘리먼트
#### <script> 엘리먼트 붙이기
#### 게으른 로딩 (lazy loading)
#### 주문형 로딩
#### 자바스크립트 사전 로딩

