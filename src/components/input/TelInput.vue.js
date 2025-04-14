import { ref } from 'vue';
import { watch } from 'vue';
const props = defineProps();
const emit = defineEmits();
const isError = ref(true);
const isFocused = ref(false);
const telField = ref();
const dropDownOption = {
    showDialCodeInSelection: false,
    showDialCodeInList: true,
    showFlags: true,
    showSearchBox: false,
};
const inputOptions = {
    placeholder: '',
};
watch(() => props.autoFocus, () => {
    var _a;
    if (telField.value) {
        (_a = telField.value) === null || _a === void 0 ? void 0 : _a.focus();
    }
});
const checkValidity = (value) => {
    isError.value = true;
    if (value.valid) {
        isError.value = false;
        emit('update:modelValue', value.formatted);
    }
    else {
        emit('update:modelValue', undefined);
    }
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['tel']} */ ;
/** @type {__VLS_StyleScopedClasses['tel']} */ ;
/** @type {__VLS_StyleScopedClasses['tel']} */ ;
/** @type {__VLS_StyleScopedClasses['tel']} */ ;
/** @type {__VLS_StyleScopedClasses['error']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "flex flex-col gap-[8px] min-w-0 w-full relative h-[102px]" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)(Object.assign({ class: "w-fit" }));
(__VLS_ctx.label);
const __VLS_0 = {}.VueTelInput;
/** @type {[typeof __VLS_components.VueTelInput, typeof __VLS_components.vueTelInput, typeof __VLS_components.VueTelInput, typeof __VLS_components.vueTelInput, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ 'onValidate': {} }, { 'onFocus': {} }), { ref: "telField", mode: "international" }), { class: "h-[48px]" }), { class: (__VLS_ctx.isError && __VLS_ctx.isFocused && __VLS_ctx.telField !== '' && 'error') }), { styleClasses: "tel", inputOptions: (__VLS_ctx.inputOptions), dropdownOptions: (__VLS_ctx.dropDownOption), autoDefaultCountry: (true), validCharactersOnly: (true), enableValidate: (true) })));
const __VLS_2 = __VLS_1(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ 'onValidate': {} }, { 'onFocus': {} }), { ref: "telField", mode: "international" }), { class: "h-[48px]" }), { class: (__VLS_ctx.isError && __VLS_ctx.isFocused && __VLS_ctx.telField !== '' && 'error') }), { styleClasses: "tel", inputOptions: (__VLS_ctx.inputOptions), dropdownOptions: (__VLS_ctx.dropDownOption), autoDefaultCountry: (true), validCharactersOnly: (true), enableValidate: (true) }), ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_4;
let __VLS_5;
let __VLS_6;
const __VLS_7 = {
    onValidate: (__VLS_ctx.checkValidity)
};
const __VLS_8 = {
    onFocus: (...[$event]) => {
        __VLS_ctx.isFocused = true;
    }
};
/** @type {typeof __VLS_ctx.telField} */ ;
var __VLS_9 = {};
var __VLS_3;
if (__VLS_ctx.isError && __VLS_ctx.isFocused && __VLS_ctx.telField !== '') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "message text-[12px]/[12px] text-[rgb(176,0,32)] font-semibold" }));
}
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-[8px]']} */ ;
/** @type {__VLS_StyleScopedClasses['min-w-0']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[102px]']} */ ;
/** @type {__VLS_StyleScopedClasses['w-fit']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[48px]']} */ ;
/** @type {__VLS_StyleScopedClasses['message']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[12px]/[12px]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[rgb(176,0,32)]']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
// @ts-ignore
var __VLS_10 = __VLS_9;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            isError: isError,
            isFocused: isFocused,
            telField: telField,
            dropDownOption: dropDownOption,
            inputOptions: inputOptions,
            checkValidity: checkValidity,
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
