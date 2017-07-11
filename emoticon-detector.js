const unicode = require("emoji-unicode-map");

module.exports = class Emoticon {

    /**
     * Gets graphic emoticon map
     * @return {Object}
     */
    static getAll() {
        return unicode.emoji;
    }

    static EMOTICONS() {
        return {
            happy: [
                ':‑)',
                ':-]',
                ':-3',
                ':->',
                '8-)',
                ':-}',
                ':o)',
                ':c)',
                ':^)',
                '=]',
                '=)',
                ':)',
                ':]',
                ':3',
                ':>',
                '8)',
                ':}'
            ],
            smirk: [
                '( ͡° ͜ʖ ͡°)'
            ],
            cheer: [
                '\o/'
            ],
            fishy: [
                '><>',
                '<*)))‑{',
                '><(((*>'
            ],
            cheerleader: [
                '*\0/*'
            ],
            laughing: [
                ':‑D',
                '8‑D',
                'x‑D',
                'X‑D',
                ':D',
                '8D',
                'xD',
                'XD',
                '=D',
                '=3',
                'B^D',
                '^_^',
                '(°o°)',
                '(^_^)/',
                '(^O^)／',
                '(^o^)／',
                '(^^)/',
                '(≧∇≦)/',
                '(/◕ヮ◕)/',
                '(^o^)丿',
                '∩(·ω·)∩',
                '(·ω·)',
                '^ω^'
            ],
            respect: [
                '(__)',
                '_(._.)_',
                '_(_^_)_',
                '<(_ _)>',
                '<m(__)m>',
                'm(__)m',
                'm(_ _)m'
            ],
            questioning: [
                '＼(°ロ＼)',
                '(／ロ°)／'
            ],
            double_chin: [
                ':-))'
            ],
            frown: [
                ':‑(',
                ':‑c',
                ':‑<',
                ':‑[',
                ':-||',
                '>:[',
                ':{',
                ':@',
                '>:('
            ],
            crying: [
                ':\'‑(',
                ':\'('
            ],
            tears_of_happiness: [
                ':\'‑)',
                ':\')',
            ],
            disgust: [
                'D‑\':',
                'D:<',
                'D:',
                'D8',
                'D;',
                'D=',
                'DX',
                'v.v'
            ],
            surprise: [
                ':‑O',
                ':O',
                ':‑o',
                ':o',
                ':-0',
                '8‑0',
                '>:O',
                'O_O',
                'o‑o',
                'O_o',
                'o_O',
                'o_o',
                'O-O'
            ],
            kiss: [
                ':-*',
                ':*',
                ':×'
            ],
            wink: [
                ';‑)',
                ';)',
                '*-)',
                '*)',
                ';‑]',
                ';]',
                ';^)',
                ':‑,',
                ';D',
                '(^_-)',
                '(^_-)-☆'
            ],
            playful: [
                ':‑P',
                ':P',
                'X‑P',
                'XP',
                'x‑p',
                'xp',
                ':‑p',
                ':p',
                ':‑Þ',
                ':Þ',
                ':‑þ',
                ':þ',
                ':‑b',
                ':b',
                'd:',
                '=p',
                '>:P'
            ],
            skeptical: [
                ':‑/',
                ':/',
                ':‑.',
                '>:\\',
                '>:/',
                ':\\',
                ':\\',
                '=\\',
                ':L',
                ':L',
                ':S',
                '>.<',
                '((+_+))',
                '(+o+)',
                '(°°)',
                '(°-°)',
                '(°.°)',
                '(°_°)',
                '(°_°>)',
                '(°レ°)'
            ],
            ultraman: [
                '(o|o)'
            ],
            high_five: [
                '^5',
                'o/\o',
                '>_>^ ^<_<'
            ],
            indecision: [
                ':‑|',
                ':|'
            ],
            embarassed: [
                ':$'
            ],
            tongue_tied: [
                ':‑X',
                ':‑#',
                ':‑&',
                ':X',
                ':#',
                ':&'
            ],
            angel: [
                'O:‑)',
                '0:‑3',
                '0:‑)',
                'O:)',
                '0:3',
                '0:)',
                '0;^)'
            ],
            evil: [
                '>:‑)',
                '>:)',
                '}:‑)',
                '}:)',
                '}:)',
                '3:)',
                '>;)'
            ],
            cool: [
                '|;‑)',
                '|‑O'
            ],
            toungue_in_cheek: [
                ':‑J'
            ],
            partied: [
                '#‑)'
            ],
            drunk: [
                '%‑)',
                '%)'
            ],
            sick: [
                ':‑###..',
                ':###..'
            ],
            dumb: [
                '<:‑|'
            ],
            troubled: [
                '(>_<)',
                '(>_<)>',
                '(^^ゞ',
                '(^_^;)',
                '(-_-;)',
                '(~_~;)',
                '(・.・;)',
                '(・_・;)',
                '(・・;) ^^;',
                '^_^;',
                '(#^.^#)',
                '(^',
                '^;)'
            ],
            baby: [
                '(\';\')'
            ],
            smoking: [
                '(^.^)y-.o○',
                '(-.-)y-°°°'
            ],
            sleeping: [
                '(-_-)zzz'
            ],
            other: [
                '<(｀^´)>'
            ]

        }
    }


    static get EMOTICON_TEXT() {
        return /(\:\w+\:|\<[\/\\]?3|[\(\)\\\D|\*\$][\-\^]?[\:\;\=]|[\:\;\=B8][\-\^]?[3DOPp\@\$\*\\\)\(\/\|])(?=\s|[\!\.\?]|$)/;
    }
    /**
     * String to check if it is a graphic emoticon
     * @param {String} emoticon 
     */
    static isGraphicEmoticon(emoticon) {
        if (emoticon && Emoticon.getAll()[emoticon])
            return true;
        else
            return false;
    }

    /**
     * Checks a text emoticon
     * @param {String} emoticonText 
     */
    static isTextEmoticon(emoticonText) {
        if (emoticonText && emoticonText.match(Emoticon.EMOTICON_TEXT))
            return true;
        else
            return false;
    }
}