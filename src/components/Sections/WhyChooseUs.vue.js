import CardContainer from '../Card/CardContainer.vue';
import CommonButton from '../Button/CommonButton.vue';
import Data from '../../assets/Data/Data.json';
const { WhyChooseUs } = Data.section;
const emit = defineEmits();
const handleClick = (value) => {
    emit('scroll-to', value);
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['why-we']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "why-we flex flex-col" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "header flex flex-col" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "body-md-medium-uppercase" }));
(__VLS_ctx.WhyChooseUs.eyebrow);
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "h3 max-lg:h5" }));
(__VLS_ctx.WhyChooseUs.title.text1);
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "highlight" }));
(__VLS_ctx.WhyChooseUs.title.highlight);
(__VLS_ctx.WhyChooseUs.title.text2);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "card-wrapper flex max-2xl:flex-col" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "card grid w-[70%] max-2xl:w-full grid-cols-2 max-lg:grid-cols-1 flex-1" }));
for (const [item] of __VLS_getVForSourceType((__VLS_ctx.WhyChooseUs.cards))) {
    /** @type {[typeof CardContainer, ]} */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(CardContainer, new CardContainer({
        header: (item.header),
        body: (item.body),
        iconName: (item.iconName),
        cardType: ('light'),
    }));
    const __VLS_1 = __VLS_0({
        header: (item.header),
        body: (item.body),
        iconName: (item.iconName),
        cardType: ('light'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "w-[30%] max-2xl:w-full" }));
/** @type {[typeof CardContainer, typeof CardContainer, ]} */ ;
// @ts-ignore
const __VLS_3 = __VLS_asFunctionalComponent(CardContainer, new CardContainer({
    header: (__VLS_ctx.WhyChooseUs.specialcard.header),
    body: (__VLS_ctx.WhyChooseUs.specialcard.body),
    iconName: (__VLS_ctx.WhyChooseUs.specialcard.iconName),
    cardType: ('blue'),
}));
const __VLS_4 = __VLS_3({
    header: (__VLS_ctx.WhyChooseUs.specialcard.header),
    body: (__VLS_ctx.WhyChooseUs.specialcard.body),
    iconName: (__VLS_ctx.WhyChooseUs.specialcard.iconName),
    cardType: ('blue'),
}, ...__VLS_functionalComponentArgsRest(__VLS_3));
__VLS_5.slots.default;
{
    const { button: __VLS_thisSlot } = __VLS_5.slots;
    /** @type {[typeof CommonButton, ]} */ ;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(CommonButton, new CommonButton(Object.assign({ 'onClick': {} }, { text: "Contact Us", btnType: ('light'), iconPos: ('right'), iconName: ('arrow_outward') })));
    const __VLS_7 = __VLS_6(Object.assign({ 'onClick': {} }, { text: "Contact Us", btnType: ('light'), iconPos: ('right'), iconName: ('arrow_outward') }), ...__VLS_functionalComponentArgsRest(__VLS_6));
    let __VLS_9;
    let __VLS_10;
    let __VLS_11;
    const __VLS_12 = {
        onClick: (...[$event]) => {
            __VLS_ctx.handleClick('ContactUsRef');
        }
    };
    var __VLS_8;
}
var __VLS_5;
/** @type {__VLS_StyleScopedClasses['why-we']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['header']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['body-md-medium-uppercase']} */ ;
/** @type {__VLS_StyleScopedClasses['h3']} */ ;
/** @type {__VLS_StyleScopedClasses['max-lg:h5']} */ ;
/** @type {__VLS_StyleScopedClasses['highlight']} */ ;
/** @type {__VLS_StyleScopedClasses['card-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['max-2xl:flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[70%]']} */ ;
/** @type {__VLS_StyleScopedClasses['max-2xl:w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-cols-2']} */ ;
/** @type {__VLS_StyleScopedClasses['max-lg:grid-cols-1']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[30%]']} */ ;
/** @type {__VLS_StyleScopedClasses['max-2xl:w-full']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            CardContainer: CardContainer,
            CommonButton: CommonButton,
            WhyChooseUs: WhyChooseUs,
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
