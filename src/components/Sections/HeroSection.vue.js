import { computed } from 'vue';
import CommonButton from '../Button/CommonButton.vue';
import { GetViewPortWidth } from '../../utils/GetViewPortWidth';
import Data from '../../assets/Data/Data.json';
const { HeroSection } = Data.section;
const { innerWidth } = GetViewPortWidth();
const emit = defineEmits();
/// Need some change
const serviceText = computed(() => {
    if (innerWidth.value <= 375)
        return 'body-md-regular';
    else if (innerWidth.value <= 900)
        return 'Body-md-medium';
    else
        return 'Body-lg-medium';
});
const gif = new URL('../../assets/log/HeroGIf.gif', import.meta.url).href;
const handleClick = (value) => {
    emit('scroll-to', value);
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['hero-section']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "hero-section flex justify-between sm:h-screen-minus-96 max-lg:flex-col max-sm:justify-normal max-sm:h-fit" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "hero-content relative flex flex-col items-start justify-end w-[60%] max-lg:w-[100%]" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "hero-animation absolute w-[900px] h-[675px] z-[-1] left-[-306px] top-[-80px] max-lg:hidden" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)(Object.assign({ src: (__VLS_ctx.gif) }, { class: "w-full h-full" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "hero-wrapper flex flex-col z-100" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "hero-text flex flex-col" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "hero-services" }, { class: (__VLS_ctx.serviceText) }));
(__VLS_ctx.HeroSection.eyebrow);
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "hero-header h3 max-lg:h5" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "highlight" }));
(__VLS_ctx.HeroSection.title.highlight);
(__VLS_ctx.HeroSection.title.text2);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "actions flex max-lg:flex-col" }));
/** @type {[typeof CommonButton, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(CommonButton, new CommonButton(Object.assign({ 'onClick': {} }, { text: "Book a Consultation", btnType: ('primary'), iconPos: ('right'), iconName: ('arrow_outward') })));
const __VLS_1 = __VLS_0(Object.assign({ 'onClick': {} }, { text: "Book a Consultation", btnType: ('primary'), iconPos: ('right'), iconName: ('arrow_outward') }), ...__VLS_functionalComponentArgsRest(__VLS_0));
let __VLS_3;
let __VLS_4;
let __VLS_5;
const __VLS_6 = {
    onClick: (...[$event]) => {
        __VLS_ctx.handleClick('ContactUsRef');
    }
};
var __VLS_2;
/** @type {[typeof CommonButton, ]} */ ;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent(CommonButton, new CommonButton(Object.assign({ 'onClick': {} }, { text: "About Us", btnType: ('outlined') })));
const __VLS_8 = __VLS_7(Object.assign({ 'onClick': {} }, { text: "About Us", btnType: ('outlined') }), ...__VLS_functionalComponentArgsRest(__VLS_7));
let __VLS_10;
let __VLS_11;
let __VLS_12;
const __VLS_13 = {
    onClick: (...[$event]) => {
        __VLS_ctx.handleClick('AboutUsRef');
    }
};
var __VLS_9;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "hero-img w-[40%] max-lg:w-[100%] lg:flex-1 max-lg:h-[100%] max-lg:1/4 max-sm:aspect-square max-sm:h-fit" }));
/** @type {__VLS_StyleScopedClasses['hero-section']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:h-screen-minus-96']} */ ;
/** @type {__VLS_StyleScopedClasses['max-lg:flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['max-sm:justify-normal']} */ ;
/** @type {__VLS_StyleScopedClasses['max-sm:h-fit']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-content']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['items-start']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-end']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[60%]']} */ ;
/** @type {__VLS_StyleScopedClasses['max-lg:w-[100%]']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-animation']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[900px]']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[675px]']} */ ;
/** @type {__VLS_StyleScopedClasses['z-[-1]']} */ ;
/** @type {__VLS_StyleScopedClasses['left-[-306px]']} */ ;
/** @type {__VLS_StyleScopedClasses['top-[-80px]']} */ ;
/** @type {__VLS_StyleScopedClasses['max-lg:hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['z-100']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-text']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-services']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-header']} */ ;
/** @type {__VLS_StyleScopedClasses['h3']} */ ;
/** @type {__VLS_StyleScopedClasses['max-lg:h5']} */ ;
/** @type {__VLS_StyleScopedClasses['highlight']} */ ;
/** @type {__VLS_StyleScopedClasses['actions']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['max-lg:flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-img']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[40%]']} */ ;
/** @type {__VLS_StyleScopedClasses['max-lg:w-[100%]']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['max-lg:h-[100%]']} */ ;
/** @type {__VLS_StyleScopedClasses['max-lg:1/4']} */ ;
/** @type {__VLS_StyleScopedClasses['max-sm:aspect-square']} */ ;
/** @type {__VLS_StyleScopedClasses['max-sm:h-fit']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            CommonButton: CommonButton,
            HeroSection: HeroSection,
            serviceText: serviceText,
            gif: gif,
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
