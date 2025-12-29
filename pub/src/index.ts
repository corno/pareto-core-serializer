/**
 * these functions coming from core-internals should be exposed for serializer development
 */
export {
    build_text,
    build_list,
    panic as unreachable_code_path,
    integer_division,
} from "pareto-core-internals"

export const get_text_length = (text: string): number => {
    return text.length
}