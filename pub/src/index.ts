/**
 * these functions coming from core-internals should be exposed for serializer development
 */
export {
    text_build,
    list_build,
    panic as unreachable_code_path,
    integer_divide,
    
    cc,
    au,
    ss,
} from "pareto-core-internals"

export const get_text_length = (text: string): number => {
    return text.length
}