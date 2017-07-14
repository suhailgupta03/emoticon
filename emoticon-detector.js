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
                ':}',
                '(●＾o＾●)',
                '(＾ｖ＾)',
                '(＾ｕ＾)',
                '(＾◇＾)',
                '( ^)o(^ )',
                '(^O^)',
                '(^o^)',
                '(^○^)', ')^o^( (*^▽^*)',
                '(✿◠‿◠)',
                'オーホッホ'
            ],
            angry: [
                '(＃ﾟДﾟ)',
                '（ ´Д｀）'
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
                '><(((*>',
                '>°)))彡',
                '(Q))',
                '><ヨヨ (°))<<',
                '>°))))彡',
                '<°)))彡',
                '>°))彡',
                '<+))><<',
                '<*))>=<'
            ],
            octopus: [
                '<コ:彡',
                'Ｃ:.ミ'
            ],
            snake: [
                '~>°)～～～'
            ],
            bat: [
                '～°·_·°～'
            ],
            tadpole: [
                '(°°)～'
            ],
            bomb: [
                '●～*'
            ],
            table_flip: [
                '(╯°□°）',
                '╯︵', 
                '┻━┻',
                '┬──┬',
                ' ¯\_(ツ)'
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
                '^ω^',
                '^m^',
                '>^_^<',
                '<^!^>',
                '^/^',
                '（*^_^*）',
                '§^.^§',
                '(^<^)',
                '(^.^)',
                '(^ム^)',
                '(^·^)',
                '(^.^)',
                '(^_^.)',
                '(^_^)',
                '(^^)',
                '(^J^)',
                '(*^.^*)',
                '^_^',
                '(#^.^#)',
                '（^—^）',
                '(*^^)v',
                '(^^)v',
                '(^_^)v',
                '(’-’*)',
                '(＾ｖ＾)',
                '(＾▽＾)',
                '(・∀・)',
                '(´∀`)',
                '(⌒▽⌒)',
                '(￣ー￣)',
                'm9(^Д^)'
            ],
            waving: [
                '(^^)/~~~',
                '(^_^)/~',
                '(;_;)/~~~',
                '(^.^)/~~~',
                '(-_-)/~~~',
                '($··)/~~~',
                '(@^^)/~~~',
                '(T_T)/~~~',
                '(ToT)/~~~'
            ],
            worried: [
                '(-"-)',
                '(ーー゛)',
                '(^_^メ)',
                '(-_-メ)',
                '(~_~メ)',
                '(－－〆)',
                '(・へ・)',
                '(｀´)',
                '<`～´>',
                '<`ヘ´>',
                '(ーー;)'
            ],
            eyeglasses: [
                '(^0_0^)'
            ],
            jotting_note: [
                '( ..)φ',
                'φ(..)'
            ],
            alien: [
                '(V)o￥o(V)'
            ],
            excited: [
                '＼(~o~)／',
                '＼(^o^)／',
                '＼(-o-)／',
                'ヽ(^。^)ノ',
                'ヽ(^o^)丿',
                '(*^0^*)'
            ],
            amazed: [
                '(*_*)',
                '(*_*;',
                '(+_+)',
                '(@_@)',
                '(@_@。',
                '(＠_＠;)',
                '＼(◎o◎)／！'
            ],
            respect: [
                '(__)',
                '_(._.)_',
                '_(_^_)_',
                '<(_ _)>',
                '<m(__)m>',
                'm(__)m',
                'm(_ _)m',
                '(｀-´)>'
            ],
            irritable: [
                'ヽ(`Д´)ﾉ'
            ],
            peace: [
                'ヽ(´ー｀)ﾉ'
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
                '>:(',
                '(´；ω；`)'
            ],
            crying: [
                ':\'‑(',
                ':\'(',
                '(\'_\')',
                '(/_;)',
                '(T_T)',
                '(;_;)',
                '(;_;',
                '(;_:)',
                '(;O;)',
                '(:_;)',
                '(ToT)',
                '(Ｔ▽Ｔ)',
                ';_;', ';-;',
                ';n;',
                ';;',
                'Q.Q',
                'T.T',
                'QQ',
                'Q_Q'
            ],
            shame: [
                '(ー_ー)!!',
                '(-.-)',
                '(-_-)',
                '(一一)',
                '(；一_一)'
            ],
            tired: [
                '(=_=)'
            ],
            cat: [
                '(=^·^=)',
                '(=^··^=)',
                '=_^='
            ],
            looking_down: [
                '(..)',
                '(._.)'
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
                'O-O',
                '(￣□￣;)',
                '°o°',
                '°O°',
                ':O o_O',
                'o_0',
                'o.O',
                '(o.o)',
                'oO',
                '（ ﾟ Дﾟ)',
                '(°◇°)',
                '（　ﾟДﾟ）'
            ],
            dissatisfied: [
                '(*￣m￣)'
            ],
            shrug: [
                'ヽ(´ー｀)┌',
                '¯\_(ツ)_/¯'
            ],
            infatuation: [
                '(*´▽｀*)',
                '(*°∀°)=3'
            ],
            snubbed: [
                '(´･ω･`)',
                '(‘A`)'
            ],
            kiss: [
                ':-*',
                ':*',
                ':×',
                '(*^3^)/~☆'
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
                '>:P',
                '(`･ω･´)'
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
                '(°レ°)',
                '(・・?',
                '(?_?)'
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
            indifferent: [
                '（　´_ゝ`）'
            ],
            embarassed: [
                ':$',
                '(－‸ლ)'
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
            headphones: [
                '((d[-_-]b))'
            ],
            study: [
                '.....φ(・∀・＊)'
            ],
            bubbles: [
                '.o○',
                '○o.'
            ],
            cup_of_tea: [
                '( ^^)',
                '_U~~',
                '_旦~~'
            ],
            star: [
                '☆彡',
                '☆ミ'
            ],
            carefree: [
                '（´∀｀）'
            ],
            other: [
                '<(｀^´)>',
                '!(^^)!',
                '(~o~)',
                '(~_~)',
                '(^^ゞ',
                '(p_-)',
                ':3ミ',
                '┐(\'～`；)┌'
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