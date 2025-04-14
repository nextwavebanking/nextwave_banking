import { computed, ref } from 'vue';
import CommonButton from '../Button/CommonButton.vue';
import ThreeLineButton from '../Button/ThreeLineButton.vue';
import { GetViewPortWidth } from '../../utils/GetViewPortWidth';
import { watch } from 'vue';
const nextWave = new URL('../../assets/log/Logo Next Wave 1.svg', import.meta.url).href;
const showList = ref();
const buttonsRef = ref();
const { innerWidth } = GetViewPortWidth();
const props = defineProps();
const emit = defineEmits();
const isWidthMin = computed(() => innerWidth.value < 900);
watch(() => isWidthMin.value, (value) => {
    if (!value)
        clearState();
});
watch(() => props.isClickedOutside, () => clearState());
const handleClick = (value) => {
    emit('scroll-to', value);
    clearState();
};
const clearState = () => {
    showList.value = undefined;
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['header']} */ ;
/** @type {__VLS_StyleScopedClasses['buttons']} */ ;
/** @type {__VLS_StyleScopedClasses['buttons']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "header w-[100%] h-fit flex sticky justify-between items-center z-50 top-0 max-w-[100%]" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "icon max-lg:h-[28px] max-lg:w-[114px]" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)(Object.assign(Object.assign({ onClick: (...[$event]) => {
        __VLS_ctx.handleClick('top');
    } }, { src: (__VLS_ctx.nextWave), alt: "Logo" }), { class: "w-[100%] h-[100%]" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "buttons" }, { class: ({ show: __VLS_ctx.showList && __VLS_ctx.isWidthMin, hide: __VLS_ctx.showList === false && __VLS_ctx.isWidthMin }) }));
/** @type {[typeof CommonButton, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(CommonButton, new CommonButton(Object.assign({ 'onClick': {} }, { text: "About Us", btnType: ('ghost'), widthType: (__VLS_ctx.isWidthMin ? 'full' : 'fit') })));
const __VLS_1 = __VLS_0(Object.assign({ 'onClick': {} }, { text: "About Us", btnType: ('ghost'), widthType: (__VLS_ctx.isWidthMin ? 'full' : 'fit') }), ...__VLS_functionalComponentArgsRest(__VLS_0));
let __VLS_3;
let __VLS_4;
let __VLS_5;
const __VLS_6 = {
    onClick: (...[$event]) => {
        __VLS_ctx.handleClick('AboutUsRef');
    }
};
var __VLS_2;
/** @type {[typeof CommonButton, ]} */ ;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent(CommonButton, new CommonButton(Object.assign({ 'onClick': {} }, { text: "Service", btnType: ('ghost'), widthType: (__VLS_ctx.isWidthMin ? 'full' : 'fit') })));
const __VLS_8 = __VLS_7(Object.assign({ 'onClick': {} }, { text: "Service", btnType: ('ghost'), widthType: (__VLS_ctx.isWidthMin ? 'full' : 'fit') }), ...__VLS_functionalComponentArgsRest(__VLS_7));
let __VLS_10;
let __VLS_11;
let __VLS_12;
const __VLS_13 = {
    onClick: (...[$event]) => {
        __VLS_ctx.handleClick('ServiceRef');
    }
};
var __VLS_9;
/** @type {[typeof CommonButton, ]} */ ;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent(CommonButton, new CommonButton(Object.assign({ 'onClick': {} }, { text: "Process", btnType: ('ghost'), widthType: (__VLS_ctx.isWidthMin ? 'full' : 'fit') })));
const __VLS_15 = __VLS_14(Object.assign({ 'onClick': {} }, { text: "Process", btnType: ('ghost'), widthType: (__VLS_ctx.isWidthMin ? 'full' : 'fit') }), ...__VLS_functionalComponentArgsRest(__VLS_14));
let __VLS_17;
let __VLS_18;
let __VLS_19;
const __VLS_20 = {
    onClick: (...[$event]) => {
        __VLS_ctx.handleClick('HowItWorksRef');
    }
};
var __VLS_16;
/** @type {[typeof CommonButton, ]} */ ;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(CommonButton, new CommonButton(Object.assign({ 'onClick': {} }, { text: "Contact Us", btnType: ('primary'), iconPos: ('right'), iconName: ('arrow_outward'), widthType: (__VLS_ctx.isWidthMin ? 'full' : 'fit') })));
const __VLS_22 = __VLS_21(Object.assign({ 'onClick': {} }, { text: "Contact Us", btnType: ('primary'), iconPos: ('right'), iconName: ('arrow_outward'), widthType: (__VLS_ctx.isWidthMin ? 'full' : 'fit') }), ...__VLS_functionalComponentArgsRest(__VLS_21));
let __VLS_24;
let __VLS_25;
let __VLS_26;
const __VLS_27 = {
    onClick: (...[$event]) => {
        __VLS_ctx.handleClick('ContactUsRef');
    }
};
var __VLS_23;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "three-line-button flex lg:hidden" }, { ref: "buttonsRef" }));
/** @type {typeof __VLS_ctx.buttonsRef} */ ;
/** @type {[typeof ThreeLineButton, ]} */ ;
// @ts-ignore
const __VLS_28 = __VLS_asFunctionalComponent(ThreeLineButton, new ThreeLineButton({
    modelValue: (__VLS_ctx.showList),
}));
const __VLS_29 = __VLS_28({
    modelValue: (__VLS_ctx.showList),
}, ...__VLS_functionalComponentArgsRest(__VLS_28));
/** @type {__VLS_StyleScopedClasses['header']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[100%]']} */ ;
/** @type {__VLS_StyleScopedClasses['h-fit']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['sticky']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['z-50']} */ ;
/** @type {__VLS_StyleScopedClasses['top-0']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-[100%]']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['max-lg:h-[28px]']} */ ;
/** @type {__VLS_StyleScopedClasses['max-lg:w-[114px]']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[100%]']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[100%]']} */ ;
/** @type {__VLS_StyleScopedClasses['buttons']} */ ;
/** @type {__VLS_StyleScopedClasses['show']} */ ;
/** @type {__VLS_StyleScopedClasses['hide']} */ ;
/** @type {__VLS_StyleScopedClasses['three-line-button']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:hidden']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            CommonButton: CommonButton,
            ThreeLineButton: ThreeLineButton,
            nextWave: nextWave,
            showList: showList,
            buttonsRef: buttonsRef,
            isWidthMin: isWidthMin,
            handleClick: handleClick,
        };
    },
    __typeEmits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
