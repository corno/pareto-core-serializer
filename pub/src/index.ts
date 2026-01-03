import * as _pinternals from "pareto-core-internals"

/**
 * these functions coming from core-internals should be exposed for serializer development
 */
export {
    unreachable_code_path,
    integer_divide,

    cc,
    au,
    ss,
} from "pareto-core-internals"

export namespace natural {

    export const text_length = (text: string): number => {
        return text.length
    }

}

export namespace list {

    export const build = _pinternals.list_build

}

export namespace text {

    export const build = _pinternals.text_build

}