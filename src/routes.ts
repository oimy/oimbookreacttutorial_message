
import ChatBox1Component from "./pages/1_component/ChatBox";
import ChatBox2Props from "./pages/2_props/ChatBox";
import ChatBox3Condition from "./pages/3_condition/ChatBox";
import ChatBox4Css from "./pages/4_css/ChatBox";
import ChatBox5State from "./pages/5_state/Box";
import ChatBox6Input from "./pages/6_input/Box";

export interface ComponentRoute {
    component: () => React.JSX.Element;
    path: string;
    title: string;
    postUrl: string;
}

export const componentRoutes: ComponentRoute[] = [
    {
        component: ChatBox1Component,
        path: "/1-component",
        title: "1. 컴포넌트 만들어보기",
        postUrl:
            "https://oimbook.tistory.com/entry/1-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%B3%B4%EA%B8%B0",
    },
    {
        component: ChatBox2Props,
        path: "/2-props",
        title: "2. Props 전달하기",
        postUrl: "https://oimbook.tistory.com/entry/2-Props-%EC%A0%84%EB%8B%AC%ED%95%98%EA%B8%B0",
    },
    {
        component: ChatBox3Condition,
        path: "/3-condition",
        title: "3. 조건부 렌더링 사용하기",
        postUrl: "https://oimbook.tistory.com/entry/3-Conditional-Rendering",
    },
    {
        component: ChatBox4Css,
        path: "/4-css",
        title: "4. CSS 입히기",
        postUrl: "https://oimbook.tistory.com/entry/4-CSS-%EC%9E%85%ED%9E%88%EA%B8%B0",
    },
    {
        component: ChatBox5State,
        path: "/5-state",
        title: "5. State로 리렌더링하기",
        postUrl: "https://oimbook.tistory.com/entry/5-State%EB%A1%9C-%EB%A6%AC%EB%A0%8C%EB%8D%94%EB%A7%81%ED%95%98%EA%B8%B0",
    },
    {
        component: ChatBox6Input,
        path: "/6-input",
        title: "6. 인터렉티브한 Input 만들기",
        postUrl:
            "https://oimbook.tistory.com/entry/6-%EC%9D%B8%ED%84%B0%EB%A0%89%ED%8B%B0%EB%B8%8C%ED%95%9C-Input-%EB%A7%8C%EB%93%A4%EA%B8%B0"
        ,
    },
];
