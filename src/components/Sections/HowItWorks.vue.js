import CardContainer from '../Card/CardContainer.vue';
import CommonButton from '../Button/CommonButton.vue';
import Data from '../../assets/Data/Data.json';
const { HowItWorks } = Data.section;
const emit = defineEmits();
const handleClick = (value) => {
    emit('scroll-to', value);
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['how-it-works']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "how-it-works flex flex-col" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "wrapper flex max-lg:flex-col" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "text-wrapper flex flex-col flex-1" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "body-md-medium-uppercase" }));
(__VLS_ctx.HowItWorks.eyebrow);
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "h3 max-lg:h5" }));
(__VLS_ctx.HowItWorks.title.text1);
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "highlight" }));
(__VLS_ctx.HowItWorks.title.highlight);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "action flex items-center" }));
/** @type {[typeof CommonButton, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(CommonButton, new CommonButton(Object.assign({ 'onClick': {} }, { text: "Learn More", btnType: ('primary'), iconPos: ('right'), iconName: ('arrow_outward') })));
const __VLS_1 = __VLS_0(Object.assign({ 'onClick': {} }, { text: "Learn More", btnType: ('primary'), iconPos: ('right'), iconName: ('arrow_outward') }), ...__VLS_functionalComponentArgsRest(__VLS_0));
let __VLS_3;
let __VLS_4;
let __VLS_5;
const __VLS_6 = {
    onClick: (...[$event]) => {
        __VLS_ctx.handleClick('ContactUsRef');
    }
};
var __VLS_2;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "cards flex max-lg:flex-col" }));
for (const [item] of __VLS_getVForSourceType((__VLS_ctx.HowItWorks.cards))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "w-full" }));
    /** @type {[typeof CardContainer, ]} */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(CardContainer, new CardContainer({
        header: (item.header),
        body: (item.body),
        iconName: (item.iconName),
        cardType: ('white'),
    }));
    const __VLS_8 = __VLS_7({
        header: (item.header),
        body: (item.body),
        iconName: (item.iconName),
        cardType: ('white'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
}
/** @type {__VLS_StyleScopedClasses['how-it-works']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['max-lg:flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['text-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['body-md-medium-uppercase']} */ ;
/** @type {__VLS_StyleScopedClasses['h3']} */ ;
/** @type {__VLS_StyleScopedClasses['max-lg:h5']} */ ;
/** @type {__VLS_StyleScopedClasses['highlight']} */ ;
/** @type {__VLS_StyleScopedClasses['action']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['cards']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['max-lg:flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            CardContainer: CardContainer,
            CommonButton: CommonButton,
            HowItWorks: HowItWorks,
            handleClick: handleClick,
        };
    },
    __typeEmits: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
});
; /* PartiallyEnd: #4569/main.vue */
