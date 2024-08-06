///////////////////////////////////////////////////////////////////////////////
//
// Tokens
//
///////////////////////////////////////////////////////////////////////////////
// sql
const ABSOLUTE = /ABSOLUTE/i;
const ACTION = /ACTION/i;
const ADD = /ADD/i;
const ALL = /ALL/i;
const ALLOCATE = /ALLOCATE/i;
const ALTER = /ALTER/i;
const AND = /AND/i;
const ANY = /ANY/i;
const ARE = /ARE/i;
const AS = /AS/i;
const ASC = /ASC/i;
const ASSERTION = /ASSERTION/i;
const AT = /AT/i;
const AUTHORIZATION = /AUTHORIZATION/i;
const AVG = /AVG/i;
const BEGIN = /BEGIN/i;
const BETWEEN = /BETWEEN/i;
const BIT_LENGTH = /BIT_LENGTH/i;
const BY = /BY/i;
const CASCADE = /CASCADE/i;
const CASCADED = /CASCADED/i;
const CASE = /CASE/i;
const CAST = /CAST/i;
const CATALOG = /CATALOG/i;
const CHAR = /CHAR/i;
const CHARACTER = /CHARACTER/i;
const CHARACTER_LENGTH = /CHARACTER_LENGTH/i;
const CHAR_LENGTH = /CHAR_LENGTH/i;
const CHECK = /CHECK/i;
const CLOSE = /CLOSE/i;
const COALESCE = /COALESCE/i;
const COLLATE = /COLLATE/i;
const COLLATION = /COLLATION/i;
const COLUMN = /COLUMN/i;
const COMMIT = /COMMIT/i;
const CONNECT = /CONNECT/i;
const CONNECTION = /CONNECTION/i;
const CONSTRAINT = /CONSTRAINT/i;
const CONSTRAINTS = /CONSTRAINTS/i;
const CONTINUE = /CONTINUE/i;
const CONVERT = /CONVERT/i;
const CORRESPONDING = /CORRESPONDING/i;
const COUNT = /COUNT/i;
const CREATE = /CREATE/i;
const CROSS = /CROSS/i;
const CURRENT = /CURRENT/i;
const CURRENT_DATE = /CURRENT_DATE/i;
const CURRENT_TIME = /CURRENT_TIME/i;
const CURRENT_TIMESTAMP = /CURRENT_TIMESTAMP/i;
const CURRENT_USER = /CURRENT_USER/i;
const CURSOR = /CURSOR/i;
const DATE = /DATE/i;
const DEALLOCATE = /DEALLOCATE/i;
const DEC = /DEC/i;
const DECIMAL = /DECIMAL/i;
const DECLARE = /DECLARE/i;
const DEFAULT = /DEFAULT/i;
const DEFERRABLE = /DEFERRABLE/i;
const DEFERRED = /DEFERRED/i;
const DELETE = /DELETE/i;
const DESC = /DESC/i;
const DESCRIBE = /DESCRIBE/i;
const DESCRIPTOR = /DESCRIPTOR/i;
const DIAGNOSTICS = /DIAGNOSTICS/i;
const DISCONNECT = /DISCONNECT/i;
const DISTINCT = /DISTINCT/i;
const DOMAIN = /DOMAIN/i;
const DOUBLE = /DOUBLE/i;
const DROP = /DROP/i;
const ELSE = /ELSE/i;
const END = /END/i;
const END_EXEC = /END-EXEC/i;
const ESCAPE = /ESCAPE/i;
const EXCEPT = /EXCEPT/i;
const EXCEPTION = /EXCEPTION/i;
const EXEC = /EXEC/i;
const EXECUTE = /EXECUTE/i;
const EXISTS = /EXISTS/i;
const EXTERNAL = /EXTERNAL/i;
const EXTRACT = /EXTRACT/i;
const DATE_ADD = /DATE_ADD/i;
const DATE_DIFF = /DATE_DIFF/i;
const FALSE = /FALSE/i;
const FETCH = /FETCH/i;
const FIRST = /FIRST/i;
const FLOAT = /FLOAT/i;
const FOR = /FOR/i;
const FOREIGN = /FOREIGN/i;
const FOUND = /FOUND/i;
const FROM = /FROM/i;
const FULL = /FULL/i;
const GET = /GET/i;
const GLOBAL = /GLOBAL/i;
const GO = /GO/i;
const GOTO = /GOTO/i;
const GRANT = /GRANT/i;
const GROUP = /GROUP/i;
const HAVING = /HAVING/i;
const IDENTITY = /IDENTITY/i;
const IMMEDIATE = /IMMEDIATE/i;
const IN = /IN/i;
const INDICATOR = /INDICATOR/i;
const INITIALLY = /INITIALLY/i;
const INNER = /INNER/i;
const INPUT = /INPUT/i;
const INSENSITIVE = /INSENSITIVE/i;
const INSERT = /INSERT/i;
const INT = /INT/i;
const INTEGER = /INTEGER/i;
const INTERSECT = /INTERSECT/i;
const INTERVAL = /INTERVAL/i;
const INTO = /INTO/i;
const IS = /IS/i;
const ISOLATION = /ISOLATION/i;
const JOIN = /JOIN/i;
const KEY = /KEY/i;
const LANGUAGE = /LANGUAGE/i;
const LAST = /LAST/i;
const LEFT = /LEFT/i;
const LEVEL = /LEVEL/i;
const LIKE = /LIKE/i;
const LOCAL = /LOCAL/i;
const LOWER = /LOWER/i;
const MATCH = /MATCH/i;
const MAX = /MAX/i;
const MIN = /MIN/i;
const MODULE = /MODULE/i;
const NAMES = /NAMES/i;
const NATIONAL = /NATIONAL/i;
const NATURAL = /NATURAL/i;
const NCHAR = /NCHAR/i;
const NEXT = /NEXT/i;
const NO = /NO/i;
const NOT = /NOT/i;
const NULL = /NULL/i;
const NULLIF = /NULLIF/i;
const NUMERIC = /NUMERIC/i;
const OCTET_LENGTH = /OCTET_LENGTH/i;
const OF = /OF/i;
const ON = /ON/i;
const ONLY = /ONLY/i;
const OPEN = /OPEN/i;
const OPTION = /OPTION/i;
const OR = /OR/i;
const ORDER = /ORDER/i;
const OUTER = /OUTER/i;
const OUTPUT = /OUTPUT/i;
const OVERLAPS = /OVERLAPS/i;
const PAD = /PAD/i;
const PARTIAL = /PARTIAL/i;
const POSITION = /POSITION/i;
const PRECISION = /PRECISION/i;
const PREPARE = /PREPARE/i;
const PRESERVE = /PRESERVE/i;
const PRIMARY = /PRIMARY/i;
const PRIOR = /PRIOR/i;
const PRIVILEGES = /PRIVILEGES/i;
const PROCEDURE = /PROCEDURE/i;
const PUBLIC = /PUBLIC/i;
const READ = /READ/i;
const REAL = /REAL/i;
const REFERENCES = /REFERENCES/i;
const RELATIVE = /RELATIVE/i;
const RESTRICT = /RESTRICT/i;
const REVOKE = /REVOKE/i;
const RIGHT = /RIGHT/i;
const ROLLBACK = /ROLLBACK/i;
const ROWS = /ROWS/i;
const SCHEMA = /SCHEMA/i;
const SCROLL = /SCROLL/i;
const SECTION = /SECTION/i;
const SELECT = /SELECT/i;
const SESSION = /SESSION/i;
const SESSION_USER = /SESSION_USER/i;
const SET = /SET/i;
const SIZE = /SIZE/i;
const SMALLINT = /SMALLINT/i;
const SOME = /SOME/i;
const SPACE = /SPACE/i;
const SQL = /SQL/i;
const SQLCODE = /SQLCODE/i;
const SQLERROR = /SQLERROR/i;
const SQLSTATE = /SQLSTATE/i;
const SUBSTRING = /SUBSTRING/i;
const SUM = /SUM/i;
const SYSTEM_USER = /SYSTEM_USER/i;
const TABLE = /TABLE/i;
const TEMPORARY = /TEMPORARY/i;
const THEN = /THEN/i;
const TIME = /TIME/i;
const TIMESTAMP = /TIMESTAMP/i;
const TO = /TO/i;
const TRANSACTION = /TRANSACTION/i;
const TRANSLATE = /TRANSLATE/i;
const TRANSLATION = /TRANSLATION/i;
const TRIM = /TRIM/i;
const TRUE = /TRUE/i;
const UNION = /UNION/i;
const UNIQUE = /UNIQUE/i;
const UNKNOWN = /UNKNOWN/i;
const UPDATE = /UPDATE/i;
const UPPER = /UPPER/i;
const USAGE = /USAGE/i;
const USER = /USER/i;
const USING = /USING/i;
const VALUE = /VALUE/i;
const VALUES = /VALUES/i;
const VARCHAR = /VARCHAR/i;
const VARYING = /VARYING/i;
const VIEW = /VIEW/i;
const WHEN = /WHEN/i;
const WHENEVER = /WHENEVER/i;
const WHERE = /WHERE/i;
const WITH = /WITH/i;
const WORK = /WORK/i;
const WRITE = /WRITE/i;
const ZONE = /ZONE/i;
const CEIL = /CEIL/i;
const FLOOR = /FLOOR/i;
const ABS = /ABS/i;
const MOD = /MOD/i;
const SQRT = /SQRT/i;
const LN = /LN/i;
const EXP = /EXP/i;
const POW = /POW/i;
// partiql
const FILTER_DISTINCT = /FILTER_DISTINCT/i;
const MAKE_DATE = /MAKE_DATE/i;
const MAKE_TIME = /MAKE_TIME/i;
const OVERLAY = /OVERLAY/i;
const TEXT_REPLACE = /TEXT_REPLACE/i;
const TO_STRING = /TO_STRING/i;
const TO_TIMESTAMP = /TO_TIMESTAMP/i;
const UTCNOW = /UTCNOW/i;
const UNIX_TIMESTAMP = /UNIX_TIMESTAMP/i;
const FROM_UNIXTIME = /FROM_UNIXTIME/i;
const MISSING = /MISSING/i;
const PIVOT = /PIVOT/i;
const UNPIVOT = /UNPIVOT/i;
const LIMIT = /LIMIT/i;
const TUPLE = /TUPLE/i;
const REMOVE = /REMOVE/i;
const INDEX = /INDEX/i;
const CONFLICT = /CONFLICT/i;
const DO = /DO/i;
const NOTHING = /NOTHING/i;
const RETURNING = /RETURNING/i;
const MODIFIED = /MODIFIED/i;
const NEW = /NEW/i;
const OLD = /OLD/i;
const LET = /LET/i;
const BOOL = /BOOL/i;
const BOOLEAN = /BOOLEAN/i;
const STRING = /STRING/i;
const SYMBOL = /SYMBOL/i;
const CLOB = /CLOB/i;
const BLOB = /BLOB/i;
const STRUCT = /STRUCT/i;
const LIST = /LIST/i;
const SEXP = /SEXP/i;
const BAG = /BAG/i;
// RegExp
const whitespace = /\s+/;
const operators = /[+*/<>=~!@#%&|?^-]/;
const identifier_q = /(["])((?:(?:\\.)|(?:[^"\\]))*?)(["])/;
const identifier_at = /@\w+/;
const identifier_n = /\w+(\.\w+)*(\.\*)?/;
const number = /[+-]?\d+(\.\d+)?([eE][+-]?\d+)?/;
// Punctuation
const colon = ":";
const comma = ",";
const semicolon = ";";
const square_bracket_left = "[";
const square_bracket_right = "]";
const curly_bracket_left = "{";
const curly_bracket_right = "}";
const parenthesis_left = "(";
const parenthesis_right = ")";
const period = ".";
const arrow_left = "<<";
const arrow_right = ">>";

module.exports = grammar({
    name: 'partiql',

    conflicts: $ => [
        [$.tuple_punc_start, $.punctuation],
        [$.tuple_punc_end, $.punctuation],
        [$.array_punc_start, $.punctuation],
        [$.array_punc_end, $.punctuation],
        [$.bag_punc_start, $.punctuation],
        [$.bag_punc_end, $.punctuation],
    ],

    rules: {
        source_file: $ => repeat($.states),

        states: $ => choice(
            $.value,
            $.whitespace,
            $.comment,
        ),

        whitespace: $ => whitespace,

        comment: $ => choice(
            $.comment_line,
            $.comment_multi,
        ),

        comment_line: $ => /--.*/,

        comment_multi: $ => seq(
            $.comment_punc_start,
            repeat(choice(
                /[^*]/,        // any character except '*'
                /\*[^/]/       // '*' not followed by '/'
            )),
            $.comment_punc_end,
        ),

        comment_punc_start: $ => "/*",

        comment_punc_end: $ => "*/",

        value: $ => choice(
            $.scalar_value,
            $.tuple_value,
            $.collection_value,
        ),

        scalar_value: $ => choice(
            $.keywords,
            $.variable,
            $.string,
            $.number,
            $.operator,
            $.operator,
            $.ion,
        ),

        ion: $ => seq(
            '`',
            field('content', repeat(/[^`]/)), // get content between annotation ` (excluded)
            '`'
        ),

        punctuation: $ => choice(
            colon, comma, semicolon, square_bracket_left, square_bracket_left, square_bracket_right, curly_bracket_left,
            curly_bracket_right, parenthesis_left, parenthesis_right, period, arrow_left, arrow_right,
        ),

        tuple_value: $ => seq(
            $.tuple_punc_start,
            optional($.colon_pair_list),
            $.tuple_punc_end,
        ),

        tuple_punc_start: $ => curly_bracket_left,

        tuple_punc_end: $ => curly_bracket_right,

        colon_pair_list: $ => seq(
            $.colon_pair,
            repeat(seq(
                $.tuple_punc_separator,
                $.colon_pair
            ))
        ),

        colon_pair: $ => seq(
            $.value,
            $.pair_punc_separator,
            $.value_list,
        ),

        value_list: $ => prec.left(repeat1($.value)),

        tuple_punc_separator: $ => comma,

        pair_punc_separator: $ => colon,

        collection_value: $ => choice(
            $.array_value,
            $.bag_value,
        ),

        array_value: $ => seq(
            $.array_punc_start,
            optional($.array_list),
            $.array_punc_end,
        ),

        array_punc_start: $ => square_bracket_left,

        array_punc_end: $ => square_bracket_right,

        array_list: $ => seq(
            $.value,
            repeat(seq(
                $.array_punc_separator,
                $.value
            ))
        ),

        array_punc_separator: $ => choice(
            comma,
        ),

        bag_value: $ => seq(
            $.bag_punc_start,
            optional($.bag_list),
            $.bag_punc_end,
        ),

        bag_punc_start: $ => arrow_left,

        bag_punc_end: $ => arrow_right,

        bag_list: $ => seq(
            $.value,
            repeat(seq(
                $.bag_punc_separator,
                $.value
            ))
        ),

        bag_punc_separator: $ => choice(
            comma,
        ),

        keywords: $ => choice(
            $.keyword,
            $.function,
            $.type,
        ),

        keyword: $ => choice(
            ABSOLUTE, ACTION, ADD, ALL, ALLOCATE, ALTER, AND, ANY, ARE, AS, ASC, ASSERTION, AT, AUTHORIZATION, BEGIN,
            BETWEEN, BY, CASCADE, CASCADED, CASE, CATALOG, CHAR, 
            CHECK, CLOSE, COLLATE, COLLATION, COLUMN, COMMIT, CONNECT, CONNECTION, CONSTRAINT, CONSTRAINTS, CONTINUE,
            CONVERT, CORRESPONDING, CREATE, CROSS, CURRENT, CURSOR, DEALLOCATE, DEC, DECLARE, DEFAULT, DEFERRABLE,
            DEFERRED, DELETE, DESC, DESCRIBE, DESCRIPTOR, DIAGNOSTICS, DISCONNECT, DISTINCT, DOMAIN, DROP, ELSE, END,
            END_EXEC, ESCAPE, EXCEPT, EXCEPTION, EXEC, EXECUTE, EXTERNAL, FETCH, FIRST, FOR, FOREIGN,
            FOUND, FROM, FULL, GET, GLOBAL, GO, GOTO, GRANT, GROUP, HAVING, IDENTITY, IMMEDIATE, IN, INDICATOR,
            INITIALLY, INNER, INPUT, INSENSITIVE, INSERT, INTERSECT, INTERVAL, INTO, IS, ISOLATION, JOIN, KEY, LANGUAGE,
            LAST, LEFT, LEVEL, LIKE, LOCAL, MATCH, MODULE, NAMES, NATIONAL, NATURAL, NCHAR, NEXT, NO, NOT,
            OF, ON, ONLY, OPEN, OPTION, OR, ORDER, OUTER, OUTPUT, OVERLAPS, PAD, PARTIAL, 
            PRECISION, PREPARE, PRESERVE, PRIMARY, PRIOR, PRIVILEGES, PROCEDURE, PUBLIC, READ, REAL, REFERENCES,
            RELATIVE, RESTRICT, REVOKE, RIGHT, ROLLBACK, ROWS, SCHEMA, SCROLL, SECTION, SELECT, SESSION, SET, SOME,
            SPACE, SQL, SQLCODE, SQLERROR, SQLSTATE, TABLE, TEMPORARY, THEN, TIME, TO, TRANSACTION, TRANSLATE, TRANSLATION,
            UNION, UNIQUE, UNKNOWN, UPDATE, USAGE, USER, USING, VALUE, VALUES, VIEW, WHEN, WHENEVER, WHERE, WITH,
            WORK, WRITE, ZONE, PIVOT, UNPIVOT, LIMIT, TUPLE, REMOVE, INDEX, CONFLICT, DO, NOTHING, RETURNING, MODIFIED,
            NEW, OLD, LET,
            $.constant,
        ),

        function: $ => choice(
            $.aggfn,
            $.fn,
        ),

        aggfn: $ => choice(
            AVG, COUNT, MAX, MIN, SUM, CEIL, FLOOR, ABS, MOD, SQRT, LN, EXP, POW
        ),

        fn: $ => choice(
            CAST, COALESCE, CURRENT_DATE, CURRENT_TIME, CURRENT_TIMESTAMP, CURRENT_USER, EXISTS, SESSION_USER,
            SYSTEM_USER, SUBSTRING, TRIM, NULLIF, DATE_ADD, DATE_DIFF, CHAR_LENGTH, BIT_LENGTH, EXTRACT, 
            FILTER_DISTINCT, LOWER, MAKE_DATE, MAKE_TIME, SIZE, OCTET_LENGTH, OVERLAY, POSITION, TEXT_REPLACE,
            TO_STRING, TO_TIMESTAMP, UPPER, UTCNOW, UNIX_TIMESTAMP, FROM_UNIXTIME, CHARACTER_LENGTH
        ),

        type: $ => choice(
            CHARACTER, DATE, DECIMAL, DOUBLE, FLOAT, INT, INTEGER, NUMERIC, SMALLINT, TIMESTAMP, VARCHAR, VARYING,
            BOOL, BOOLEAN, STRING, SYMBOL, CLOB, BLOB, STRUCT, LIST, SEXP, BAG,
        ),

        constant: $ => choice(
            FALSE, NULL, TRUE, MISSING,
        ),

        operator: $ => choice(
            operators,
            $.punctuation,
        ),

        string: $ => token(seq(
            "'",
            repeat(choice(
                /[^'\\]/,
                /\\./
            )),
            "'"
        )),

        number: $ => number,

        variable: $ => choice(
            identifier_q,
            identifier_at,
            identifier_n,
        ),
    }
});

