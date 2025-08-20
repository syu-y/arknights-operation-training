// サンプルのオペレーター種別（必要に応じて追加/変更）
// export	type OpType = {
// 		vanguard: { label: '前衛',  pattern: 'front1' }, // 前方1マス
// 		sniper:   { label: '狙撃',  pattern: 'line3'  }, // 前方直線3
// 		caster:   { label: '術師',  pattern: 'diamond2' }, // 菱形2（マンハッタン距離<=2）
// 	};

// export type OpType = 'vanguard' | 'sniper' | 'caster'
export type OpType = {
    name: 'guard' | 'sniper' | 'caster' | 'vanguard' | 'defender' | 'specialist' | 'supporter' | 'medic'
    label: '前衛' | '狙撃' | '術師' | '先鋒' | '重装' | '特殊'  | '補助' | '医療'
}

export type PatternType = 'line:1' | 'line:2' | 'line:3' | 'diamond:1' | 'diamond:2' | 'diamond:3'
export type ModeType = 'S1' | 'S2' | 'S3'
export type SkillType = {
    mode: ModeType,
    pattern: string
}
export type FaceType = 'N' | 'W' | 'S' | 'E'

export  type Operator = {
    id: number,
    rare: number,
    name: string,
    class: OpType,
    skills: SkillType[],
    x: number,
    y: number,
    facing: FaceType
    skillIdx: number
};

export const opLists: Operator[] = [
    {
        "id": 1,
        "rare": 6,
        "name": "イネス",
        "class": {
        "name": "vanguard",
        "label": "先鋒"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "1"
        },
        {
            "mode": "S2",
            "pattern": "2"
        },
        {
            "mode": "S3",
            "pattern": "1"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 2,
        "rare": 6,
        "name": "ヴィジェル",
        "class": {
        "name": "vanguard",
        "label": "先鋒"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        },
        {
            "mode": "S2",
            "pattern": "3"
        },
        {
            "mode": "S3",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 3,
        "rare": 6,
        "name": "ウルピスフォリア",
        "class": {
        "name": "vanguard",
        "label": "先鋒"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "5"
        },
        {
            "mode": "S3",
            "pattern": "1"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 4,
        "rare": 6,
        "name": "サイラッハ",
        "class": {
        "name": "vanguard",
        "label": "先鋒"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "6"
        },
        {
            "mode": "S3",
            "pattern": "7"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 5,
        "rare": 6,
        "name": "サガ",
        "class": {
        "name": "vanguard",
        "label": "先鋒"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "8"
        },
        {
            "mode": "S3",
            "pattern": "1"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 6,
        "rare": 6,
        "name": "シージ",
        "class": {
        "name": "vanguard",
        "label": "先鋒"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "9"
        },
        {
            "mode": "S3",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 7,
        "rare": 6,
        "name": "バグパイプ",
        "class": {
        "name": "vanguard",
        "label": "先鋒"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        },
        {
            "mode": "S3",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 8,
        "rare": 6,
        "name": "フレイムテイル",
        "class": {
        "name": "vanguard",
        "label": "先鋒"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "6"
        },
        {
            "mode": "S3",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 9,
        "rare": 6,
        "name": "ミュルジス",
        "class": {
        "name": "vanguard",
        "label": "先鋒"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        },
        {
            "mode": "S2",
            "pattern": "3"
        },
        {
            "mode": "S3",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 10,
        "rare": 6,
        "name": "アイリーニ",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "5"
        },
        {
            "mode": "S3",
            "pattern": "6"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 11,
        "rare": 6,
        "name": "ヴィーナ・ヴィクトリア",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "9"
        },
        {
            "mode": "S2",
            "pattern": "1"
        },
        {
            "mode": "S3",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 12,
        "rare": 6,
        "name": "ヴィヴィアナ",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "10"
        },
        {
            "mode": "S2",
            "pattern": "4"
        },
        {
            "mode": "S3",
            "pattern": "10"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 13,
        "rare": 6,
        "name": "ウルピアヌス",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "10"
        },
        {
            "mode": "S2",
            "pattern": "4"
        },
        {
            "mode": "S3",
            "pattern": "11"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 14,
        "rare": 6,
        "name": "エンテレケイア",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "12"
        },
        {
            "mode": "S2",
            "pattern": "12"
        },
        {
            "mode": "S3",
            "pattern": "13"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 15,
        "rare": 6,
        "name": "シルバーアッシュ",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "5"
        },
        {
            "mode": "S2",
            "pattern": "14"
        },
        {
            "mode": "S3",
            "pattern": "15"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 16,
        "rare": 6,
        "name": "ズオ・ラウ",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        },
        {
            "mode": "S3",
            "pattern": "10"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 17,
        "rare": 6,
        "name": "スカジ",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        },
        {
            "mode": "S3",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 18,
        "rare": 6,
        "name": "スルト",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "1"
        },
        {
            "mode": "S3",
            "pattern": "10"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 19,
        "rare": 6,
        "name": "ソーンズ",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "5"
        },
        {
            "mode": "S2",
            "pattern": "16"
        },
        {
            "mode": "S3",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 20,
        "rare": 6,
        "name": "チェン",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "5"
        },
        {
            "mode": "S3",
            "pattern": "6"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 21,
        "rare": 6,
        "name": "チューバイ",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "5"
        },
        {
            "mode": "S2",
            "pattern": "17"
        },
        {
            "mode": "S3",
            "pattern": "16"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 22,
        "rare": 6,
        "name": "チョンユエ",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "18"
        },
        {
            "mode": "S3",
            "pattern": "8"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 23,
        "rare": 6,
        "name": "デーゲンブレヒャー",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "18"
        },
        {
            "mode": "S2",
            "pattern": "19"
        },
        {
            "mode": "S3",
            "pattern": "6"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 24,
        "rare": 6,
        "name": "パラス",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "1"
        },
        {
            "mode": "S2",
            "pattern": "10"
        },
        {
            "mode": "S3",
            "pattern": "1"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 25,
        "rare": 6,
        "name": "ブレイズ",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "1"
        },
        {
            "mode": "S3",
            "pattern": "20"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 26,
        "rare": 6,
        "name": "ヘドリー",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        },
        {
            "mode": "S3",
            "pattern": "1"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 27,
        "rare": 6,
        "name": "ペペ",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "13"
        },
        {
            "mode": "S3",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 28,
        "rare": 6,
        "name": "ヘラグ",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        },
        {
            "mode": "S3",
            "pattern": "1"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 29,
        "rare": 6,
        "name": "マウンテン",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "21"
        },
        {
            "mode": "S3",
            "pattern": "9"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 30,
        "rare": 6,
        "name": "ムリナール",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "14"
        },
        {
            "mode": "S2",
            "pattern": "22"
        },
        {
            "mode": "S3",
            "pattern": "23"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 31,
        "rare": 6,
        "name": "レッシング",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        },
        {
            "mode": "S3",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 32,
        "rare": 6,
        "name": "聖約イグゼキュター",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "13"
        },
        {
            "mode": "S2",
            "pattern": "12"
        },
        {
            "mode": "S3",
            "pattern": "13"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 33,
        "rare": 6,
        "name": "百錬ガヴィル",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "13"
        },
        {
            "mode": "S3",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 34,
        "rare": 6,
        "name": "耀騎士ニアール",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "1"
        },
        {
            "mode": "S2",
            "pattern": "4"
        },
        {
            "mode": "S3",
            "pattern": "7"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 35,
        "rare": 6,
        "name": "サリア",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "18"
        },
        {
            "mode": "S2",
            "pattern": "24"
        },
        {
            "mode": "S3",
            "pattern": "25"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 36,
        "rare": 6,
        "name": "シュウ",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "18"
        },
        {
            "mode": "S2",
            "pattern": "6"
        },
        {
            "mode": "S3",
            "pattern": "24"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 37,
        "rare": 6,
        "name": "ニェン",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        },
        {
            "mode": "S3",
            "pattern": "24"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 38,
        "rare": 6,
        "name": "ブレミシャイン",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "18"
        },
        {
            "mode": "S2",
            "pattern": "6"
        },
        {
            "mode": "S3",
            "pattern": "6"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 39,
        "rare": 6,
        "name": "ペナンス",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "18"
        },
        {
            "mode": "S3",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 40,
        "rare": 6,
        "name": "ホシグマ",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        },
        {
            "mode": "S3",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 41,
        "rare": 6,
        "name": "ホルン",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "26"
        },
        {
            "mode": "S2",
            "pattern": "26"
        },
        {
            "mode": "S3",
            "pattern": "26"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 42,
        "rare": 6,
        "name": "マドロック",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "18"
        },
        {
            "mode": "S3",
            "pattern": "6"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 43,
        "rare": 6,
        "name": "ユー",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "21"
        },
        {
            "mode": "S2",
            "pattern": "6"
        },
        {
            "mode": "S3",
            "pattern": "21"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 44,
        "rare": 6,
        "name": "ユーネクテス",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        },
        {
            "mode": "S3",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 45,
        "rare": 6,
        "name": "滌火ジェシカ",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "1"
        },
        {
            "mode": "S2",
            "pattern": "1"
        },
        {
            "mode": "S3",
            "pattern": "13"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 46,
        "rare": 6,
        "name": "Ash",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        },
        {
            "mode": "S2",
            "pattern": "3"
        },
        {
            "mode": "S3",
            "pattern": "17"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 47,
        "rare": 6,
        "name": "W(プレイアブル)",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "27"
        },
        {
            "mode": "S2",
            "pattern": "27"
        },
        {
            "mode": "S3",
            "pattern": "27"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 48,
        "rare": 6,
        "name": "アルケット",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        },
        {
            "mode": "S2",
            "pattern": "3"
        },
        {
            "mode": "S3",
            "pattern": "27"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 49,
        "rare": 6,
        "name": "ウィシャデル",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "28"
        },
        {
            "mode": "S2",
            "pattern": "28"
        },
        {
            "mode": "S3",
            "pattern": "28"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 50,
        "rare": 6,
        "name": "エクシア",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        },
        {
            "mode": "S2",
            "pattern": "3"
        },
        {
            "mode": "S3",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 51,
        "rare": 6,
        "name": "シュヴァルツ",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "20"
        },
        {
            "mode": "S2",
            "pattern": "20"
        },
        {
            "mode": "S3",
            "pattern": "10"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 52,
        "rare": 6,
        "name": "ティフォン",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "29"
        },
        {
            "mode": "S2",
            "pattern": "29"
        },
        {
            "mode": "S3",
            "pattern": "29"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 53,
        "rare": 6,
        "name": "ナラントゥヤ",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "30"
        },
        {
            "mode": "S2",
            "pattern": "31"
        },
        {
            "mode": "S3",
            "pattern": "31"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 54,
        "rare": 6,
        "name": "パゼオンカ",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "20"
        },
        {
            "mode": "S2",
            "pattern": "20"
        },
        {
            "mode": "S3",
            "pattern": "16"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 55,
        "rare": 6,
        "name": "ファートゥース",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "28"
        },
        {
            "mode": "S2",
            "pattern": "28"
        },
        {
            "mode": "S3",
            "pattern": "28"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 56,
        "rare": 6,
        "name": "フィアメッタ",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "27"
        },
        {
            "mode": "S2",
            "pattern": "27"
        },
        {
            "mode": "S3",
            "pattern": "27"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 57,
        "rare": 6,
        "name": "レイ",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "32"
        },
        {
            "mode": "S2",
            "pattern": "32"
        },
        {
            "mode": "S3",
            "pattern": "33"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 58,
        "rare": 6,
        "name": "ロサ",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "29"
        },
        {
            "mode": "S2",
            "pattern": "29"
        },
        {
            "mode": "S3",
            "pattern": "29"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 59,
        "rare": 6,
        "name": "ロスモンティス",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "28"
        },
        {
            "mode": "S2",
            "pattern": "28"
        },
        {
            "mode": "S3",
            "pattern": "28"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 60,
        "rare": 6,
        "name": "遊龍チェン",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "34"
        },
        {
            "mode": "S2",
            "pattern": "34"
        },
        {
            "mode": "S3",
            "pattern": "35"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 61,
        "rare": 6,
        "name": "イフリータ",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "36"
        },
        {
            "mode": "S2",
            "pattern": "36"
        },
        {
            "mode": "S3",
            "pattern": "36"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 62,
        "rare": 6,
        "name": "エイヤフィヤトラ",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "16"
        },
        {
            "mode": "S2",
            "pattern": "16"
        },
        {
            "mode": "S3",
            "pattern": "25"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 63,
        "rare": 6,
        "name": "エーベンホルツ",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "17"
        },
        {
            "mode": "S2",
            "pattern": "37"
        },
        {
            "mode": "S3",
            "pattern": "37"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 64,
        "rare": 6,
        "name": "カーネリアン",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "6"
        },
        {
            "mode": "S2",
            "pattern": "6"
        },
        {
            "mode": "S3",
            "pattern": "24"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 65,
        "rare": 6,
        "name": "ケオベ",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "16"
        },
        {
            "mode": "S2",
            "pattern": "16"
        },
        {
            "mode": "S3",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 66,
        "rare": 6,
        "name": "ゴールデングロー",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "16"
        },
        {
            "mode": "S2",
            "pattern": "23"
        },
        {
            "mode": "S3",
            "pattern": "16"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 67,
        "rare": 6,
        "name": "シー",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "20"
        },
        {
            "mode": "S2",
            "pattern": "3"
        },
        {
            "mode": "S3",
            "pattern": "38"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 68,
        "rare": 6,
        "name": "ニンフ",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "16"
        },
        {
            "mode": "S2",
            "pattern": "16"
        },
        {
            "mode": "S3",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 69,
        "rare": 6,
        "name": "パッセンジャー",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "16"
        },
        {
            "mode": "S2",
            "pattern": "39"
        },
        {
            "mode": "S3",
            "pattern": "25"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 70,
        "rare": 6,
        "name": "ホルハイヤ",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "16"
        },
        {
            "mode": "S2",
            "pattern": "16"
        },
        {
            "mode": "S3",
            "pattern": "27"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 71,
        "rare": 6,
        "name": "マルシル",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "20"
        },
        {
            "mode": "S2",
            "pattern": "3"
        },
        {
            "mode": "S3",
            "pattern": "40"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 72,
        "rare": 6,
        "name": "モスティマ",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "20"
        },
        {
            "mode": "S2",
            "pattern": "20"
        },
        {
            "mode": "S3",
            "pattern": "38"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 73,
        "rare": 6,
        "name": "リン",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "6"
        },
        {
            "mode": "S2",
            "pattern": "6"
        },
        {
            "mode": "S3",
            "pattern": "24"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 74,
        "rare": 6,
        "name": "ロゴス",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        },
        {
            "mode": "S2",
            "pattern": "16"
        },
        {
            "mode": "S3",
            "pattern": "38"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 75,
        "rare": 6,
        "name": "荒蕪ラップランド",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "16"
        },
        {
            "mode": "S2",
            "pattern": "23"
        },
        {
            "mode": "S3",
            "pattern": "16"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 76,
        "rare": 6,
        "name": "熾炎ブレイズ",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "16"
        },
        {
            "mode": "S2",
            "pattern": "24"
        },
        {
            "mode": "S3",
            "pattern": "41"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 77,
        "rare": 6,
        "name": "ケルシー",
        "class": {
        "name": "medic",
        "label": "医療"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "27"
        },
        {
            "mode": "S2",
            "pattern": "27"
        },
        {
            "mode": "S3",
            "pattern": "27"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 78,
        "rare": 6,
        "name": "シャイニング",
        "class": {
        "name": "medic",
        "label": "医療"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        },
        {
            "mode": "S2",
            "pattern": "3"
        },
        {
            "mode": "S3",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 79,
        "rare": 6,
        "name": "ナイチンゲール",
        "class": {
        "name": "medic",
        "label": "医療"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "30"
        },
        {
            "mode": "S2",
            "pattern": "30"
        },
        {
            "mode": "S3",
            "pattern": "30"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 80,
        "rare": 6,
        "name": "ルーメン",
        "class": {
        "name": "medic",
        "label": "医療"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "42"
        },
        {
            "mode": "S2",
            "pattern": "42"
        },
        {
            "mode": "S3",
            "pattern": "42"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 81,
        "rare": 6,
        "name": "焔影リード",
        "class": {
        "name": "medic",
        "label": "医療"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        },
        {
            "mode": "S2",
            "pattern": "3"
        },
        {
            "mode": "S3",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 82,
        "rare": 6,
        "name": "純燼エイヤフィヤトラ",
        "class": {
        "name": "medic",
        "label": "医療"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "43"
        },
        {
            "mode": "S2",
            "pattern": "43"
        },
        {
            "mode": "S3",
            "pattern": "43"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 83,
        "rare": 6,
        "name": "アンジェリーナ",
        "class": {
        "name": "supporter",
        "label": "補助"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "30"
        },
        {
            "mode": "S2",
            "pattern": "30"
        },
        {
            "mode": "S3",
            "pattern": "44"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 84,
        "rare": 6,
        "name": "ヴィルトゥオーサ",
        "class": {
        "name": "supporter",
        "label": "補助"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "30"
        },
        {
            "mode": "S2",
            "pattern": "30"
        },
        {
            "mode": "S3",
            "pattern": "45"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 85,
        "rare": 6,
        "name": "シヴィライト・エテルナ",
        "class": {
        "name": "supporter",
        "label": "補助"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "6"
        },
        {
            "mode": "S2",
            "pattern": "6"
        },
        {
            "mode": "S3",
            "pattern": "24"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 86,
        "rare": 6,
        "name": "スズラン",
        "class": {
        "name": "supporter",
        "label": "補助"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "30"
        },
        {
            "mode": "S2",
            "pattern": "30"
        },
        {
            "mode": "S3",
            "pattern": "45"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 87,
        "rare": 6,
        "name": "ステインレス",
        "class": {
        "name": "supporter",
        "label": "補助"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        },
        {
            "mode": "S3",
            "pattern": "2"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 88,
        "rare": 6,
        "name": "ノーシス",
        "class": {
        "name": "supporter",
        "label": "補助"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "46"
        },
        {
            "mode": "S2",
            "pattern": "46"
        },
        {
            "mode": "S3",
            "pattern": "46"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 89,
        "rare": 6,
        "name": "マゼラン",
        "class": {
        "name": "supporter",
        "label": "補助"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "16"
        },
        {
            "mode": "S2",
            "pattern": "18"
        },
        {
            "mode": "S3",
            "pattern": "21"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 90,
        "rare": 6,
        "name": "リィン",
        "class": {
        "name": "supporter",
        "label": "補助"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "16"
        },
        {
            "mode": "S2",
            "pattern": "16"
        },
        {
            "mode": "S3",
            "pattern": "16"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 91,
        "rare": 6,
        "name": "淬羽サイレンス",
        "class": {
        "name": "supporter",
        "label": "補助"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "46"
        },
        {
            "mode": "S2",
            "pattern": "46"
        },
        {
            "mode": "S3",
            "pattern": "46"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 92,
        "rare": 6,
        "name": "濁心スカジ",
        "class": {
        "name": "supporter",
        "label": "補助"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "6"
        },
        {
            "mode": "S2",
            "pattern": "6"
        },
        {
            "mode": "S3",
            "pattern": "6"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 93,
        "rare": 6,
        "name": "Ela",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        },
        {
            "mode": "S2",
            "pattern": "20"
        },
        {
            "mode": "S3",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 94,
        "rare": 6,
        "name": "ア",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        },
        {
            "mode": "S2",
            "pattern": "3"
        },
        {
            "mode": "S3",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 95,
        "rare": 6,
        "name": "アスカロン",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "47"
        },
        {
            "mode": "S2",
            "pattern": "47"
        },
        {
            "mode": "S3",
            "pattern": "48"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 96,
        "rare": 6,
        "name": "ウィーディ",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        },
        {
            "mode": "S3",
            "pattern": "1"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 97,
        "rare": 6,
        "name": "キリンRヤトウ",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        },
        {
            "mode": "S3",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 98,
        "rare": 6,
        "name": "クラウンスレイヤー",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        },
        {
            "mode": "S3",
            "pattern": "6"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 99,
        "rare": 6,
        "name": "グレイディーア",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "10"
        },
        {
            "mode": "S2",
            "pattern": "37"
        },
        {
            "mode": "S3",
            "pattern": "10"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 100,
        "rare": 6,
        "name": "ドロシー",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        },
        {
            "mode": "S2",
            "pattern": "3"
        },
        {
            "mode": "S3",
            "pattern": "8"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 101,
        "rare": 6,
        "name": "ファントム",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        },
        {
            "mode": "S3",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 102,
        "rare": 6,
        "name": "ミヅキ",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "47"
        },
        {
            "mode": "S2",
            "pattern": "47"
        },
        {
            "mode": "S3",
            "pattern": "44"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 103,
        "rare": 6,
        "name": "リー",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        },
        {
            "mode": "S3",
            "pattern": "18"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 104,
        "rare": 6,
        "name": "引星ソーンズ",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "49"
        },
        {
            "mode": "S2",
            "pattern": "49"
        },
        {
            "mode": "S3",
            "pattern": "28"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 105,
        "rare": 6,
        "name": "帰溟スペクター",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "18"
        },
        {
            "mode": "S2",
            "pattern": "4"
        },
        {
            "mode": "S3",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 106,
        "rare": 6,
        "name": "血掟テキサス",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "18"
        },
        {
            "mode": "S3",
            "pattern": "18"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 107,
        "rare": 6,
        "name": "琳琅スワイヤー",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "8"
        },
        {
            "mode": "S3",
            "pattern": "50"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 108,
        "rare": 6,
        "name": "ネクラス",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "16"
        },
        {
            "mode": "S2",
            "pattern": "16"
        },
        {
            "mode": "S3",
            "pattern": "16"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 109,
        "rare": 6,
        "name": "Mon3tr",
        "class": {
        "name": "medic",
        "label": "医療"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "30"
        },
        {
            "mode": "S2",
            "pattern": "30"
        },
        {
            "mode": "S3",
            "pattern": "30"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 110,
        "rare": 6,
        "name": "サンクタミキサー",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "1"
        },
        {
            "mode": "S2",
            "pattern": "1"
        },
        {
            "mode": "S3",
            "pattern": "2"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 111,
        "rare": 6,
        "name": "レミュアン",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "28"
        },
        {
            "mode": "S2",
            "pattern": "28"
        },
        {
            "mode": "S3",
            "pattern": "28"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 112,
        "rare": 6,
        "name": "新約エクシア",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        },
        {
            "mode": "S2",
            "pattern": "3"
        },
        {
            "mode": "S3",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 113,
        "rare": 6,
        "name": "トラゴーディア",
        "class": {
        "name": "supporter",
        "label": "補助"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "30"
        },
        {
            "mode": "S2",
            "pattern": "30"
        },
        {
            "mode": "S3",
            "pattern": "30"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 114,
        "rare": 6,
        "name": "司霆レイズ",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "51"
        },
        {
            "mode": "S2",
            "pattern": "25"
        },
        {
            "mode": "S3",
            "pattern": "7"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 115,
        "rare": 6,
        "name": "Raidian",
        "class": {
        "name": "supporter",
        "label": "補助"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "16"
        },
        {
            "mode": "S2",
            "pattern": "16"
        },
        {
            "mode": "S3",
            "pattern": "16"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 116,
        "rare": 6,
        "name": "ハルカ",
        "class": {
        "name": "supporter",
        "label": "補助"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "46"
        },
        {
            "mode": "S2",
            "pattern": "46"
        },
        {
            "mode": "S3",
            "pattern": "45"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 117,
        "rare": 6,
        "name": "斬業ホシグマ",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        },
        {
            "mode": "S3",
            "pattern": "24"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 118,
        "rare": 5,
        "name": "エリジウム",
        "class": {
        "name": "vanguard",
        "label": "先鋒"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "24"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 119,
        "rare": 5,
        "name": "カンタービレ",
        "class": {
        "name": "vanguard",
        "label": "先鋒"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "1"
        },
        {
            "mode": "S2",
            "pattern": "1"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 120,
        "rare": 5,
        "name": "キアーベ",
        "class": {
        "name": "vanguard",
        "label": "先鋒"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "6"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 121,
        "rare": 5,
        "name": "グラニ",
        "class": {
        "name": "vanguard",
        "label": "先鋒"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "21"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 122,
        "rare": 5,
        "name": "ケストレル",
        "class": {
        "name": "vanguard",
        "label": "先鋒"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 123,
        "rare": 5,
        "name": "サーファー",
        "class": {
        "name": "vanguard",
        "label": "先鋒"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "1"
        },
        {
            "mode": "S2",
            "pattern": "1"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 124,
        "rare": 5,
        "name": "ズィマー",
        "class": {
        "name": "vanguard",
        "label": "先鋒"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 125,
        "rare": 5,
        "name": "チルチャック",
        "class": {
        "name": "vanguard",
        "label": "先鋒"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "1"
        },
        {
            "mode": "S2",
            "pattern": "1"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 126,
        "rare": 5,
        "name": "テキサス",
        "class": {
        "name": "vanguard",
        "label": "先鋒"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "6"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 127,
        "rare": 5,
        "name": "パズル",
        "class": {
        "name": "vanguard",
        "label": "先鋒"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "1"
        },
        {
            "mode": "S2",
            "pattern": "1"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 128,
        "rare": 5,
        "name": "ブラックナイト",
        "class": {
        "name": "vanguard",
        "label": "先鋒"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        },
        {
            "mode": "S2",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 129,
        "rare": 5,
        "name": "ポンシラス",
        "class": {
        "name": "vanguard",
        "label": "先鋒"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 130,
        "rare": 5,
        "name": "ミトム",
        "class": {
        "name": "vanguard",
        "label": "先鋒"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        },
        {
            "mode": "S2",
            "pattern": "9"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 131,
        "rare": 5,
        "name": "リード",
        "class": {
        "name": "vanguard",
        "label": "先鋒"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 132,
        "rare": 5,
        "name": "ワイルドメイン",
        "class": {
        "name": "vanguard",
        "label": "先鋒"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "1"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 133,
        "rare": 5,
        "name": "ワンチィン",
        "class": {
        "name": "vanguard",
        "label": "先鋒"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "18"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 134,
        "rare": 5,
        "name": "歴陣鋭槍フェン",
        "class": {
        "name": "vanguard",
        "label": "先鋒"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 135,
        "rare": 5,
        "name": "Doc",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "1"
        },
        {
            "mode": "S2",
            "pattern": "17"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 136,
        "rare": 5,
        "name": "Fuze",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "1"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 137,
        "rare": 5,
        "name": "Tachanka",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 138,
        "rare": 5,
        "name": "アカフユ",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 139,
        "rare": 5,
        "name": "アステシア",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 140,
        "rare": 5,
        "name": "アーミヤ(前衛)",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 141,
        "rare": 5,
        "name": "インドラ",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 142,
        "rare": 5,
        "name": "ウィスラッシュ",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "1"
        },
        {
            "mode": "S2",
            "pattern": "10"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 143,
        "rare": 5,
        "name": "ウィンドチャイム",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "10"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 144,
        "rare": 5,
        "name": "エアースカーペ",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "5"
        },
        {
            "mode": "S2",
            "pattern": "16"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 145,
        "rare": 5,
        "name": "エンカク",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 146,
        "rare": 5,
        "name": "オッダ",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 147,
        "rare": 5,
        "name": "サベージ",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "10"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 148,
        "rare": 5,
        "name": "シデロカ",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "21"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 149,
        "rare": 5,
        "name": "スペクター",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 150,
        "rare": 5,
        "name": "スワイヤー",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "6"
        },
        {
            "mode": "S2",
            "pattern": "1"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 151,
        "rare": 5,
        "name": "ダグザ",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 152,
        "rare": 5,
        "name": "テキーラ",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "14"
        },
        {
            "mode": "S2",
            "pattern": "22"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 153,
        "rare": 5,
        "name": "バイビーク",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "5"
        },
        {
            "mode": "S2",
            "pattern": "5"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 154,
        "rare": 5,
        "name": "ハイモア",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "12"
        },
        {
            "mode": "S2",
            "pattern": "12"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 155,
        "rare": 5,
        "name": "フランカ",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 156,
        "rare": 5,
        "name": "ブライオファイタ",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "1"
        },
        {
            "mode": "S2",
            "pattern": "1"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 157,
        "rare": 5,
        "name": "フリント",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 158,
        "rare": 5,
        "name": "ブローカ",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "10"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 159,
        "rare": 5,
        "name": "モーガン",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 160,
        "rare": 5,
        "name": "ライオス",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 161,
        "rare": 5,
        "name": "ラ・プルマ",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "12"
        },
        {
            "mode": "S2",
            "pattern": "12"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 162,
        "rare": 5,
        "name": "ラップランド",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "5"
        },
        {
            "mode": "S2",
            "pattern": "5"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 163,
        "rare": 5,
        "name": "リェータ",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "5"
        },
        {
            "mode": "S2",
            "pattern": "5"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 164,
        "rare": 5,
        "name": "レウスSノイルホーン",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "10"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 165,
        "rare": 5,
        "name": "Blitz",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "13"
        },
        {
            "mode": "S2",
            "pattern": "1"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 166,
        "rare": 5,
        "name": "アスベストス",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "21"
        },
        {
            "mode": "S2",
            "pattern": "13"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 167,
        "rare": 5,
        "name": "アッシュロック",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "26"
        },
        {
            "mode": "S2",
            "pattern": "26"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 168,
        "rare": 5,
        "name": "アンダーフロー",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "1"
        },
        {
            "mode": "S2",
            "pattern": "10"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 169,
        "rare": 5,
        "name": "ヴァルカン",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "21"
        },
        {
            "mode": "S2",
            "pattern": "21"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 170,
        "rare": 5,
        "name": "ウン",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "18"
        },
        {
            "mode": "S2",
            "pattern": "18"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 171,
        "rare": 5,
        "name": "オーロラ",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 172,
        "rare": 5,
        "name": "クロワッサン",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "21"
        },
        {
            "mode": "S2",
            "pattern": "9"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 173,
        "rare": 5,
        "name": "シャレム",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "21"
        },
        {
            "mode": "S2",
            "pattern": "13"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 174,
        "rare": 5,
        "name": "セメント",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 175,
        "rare": 5,
        "name": "センシ",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "18"
        },
        {
            "mode": "S2",
            "pattern": "18"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 176,
        "rare": 5,
        "name": "ツェルニー",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "21"
        },
        {
            "mode": "S2",
            "pattern": "21"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 177,
        "rare": 5,
        "name": "ニアール",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "18"
        },
        {
            "mode": "S2",
            "pattern": "18"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 178,
        "rare": 5,
        "name": "バイソン",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "21"
        },
        {
            "mode": "S2",
            "pattern": "21"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 179,
        "rare": 5,
        "name": "ファイヤーホイッスル",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "26"
        },
        {
            "mode": "S2",
            "pattern": "26"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 180,
        "rare": 5,
        "name": "フィラエ",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "21"
        },
        {
            "mode": "S2",
            "pattern": "21"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 181,
        "rare": 5,
        "name": "ベースライン",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "18"
        },
        {
            "mode": "S2",
            "pattern": "18"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 182,
        "rare": 5,
        "name": "ヘビーレイン",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "18"
        },
        {
            "mode": "S2",
            "pattern": "9"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 183,
        "rare": 5,
        "name": "リスカム",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "1"
        },
        {
            "mode": "S2",
            "pattern": "1"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 184,
        "rare": 5,
        "name": "アオスタ",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "34"
        },
        {
            "mode": "S2",
            "pattern": "34"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 185,
        "rare": 5,
        "name": "アズリウス",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        },
        {
            "mode": "S2",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 186,
        "rare": 5,
        "name": "アンドレアナ",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "28"
        },
        {
            "mode": "S2",
            "pattern": "28"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 187,
        "rare": 5,
        "name": "イグゼキュター",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "34"
        },
        {
            "mode": "S2",
            "pattern": "34"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 188,
        "rare": 5,
        "name": "インサイダー",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        },
        {
            "mode": "S2",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 189,
        "rare": 5,
        "name": "エイプリル",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        },
        {
            "mode": "S2",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 190,
        "rare": 5,
        "name": "エラト",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "29"
        },
        {
            "mode": "S2",
            "pattern": "29"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 191,
        "rare": 5,
        "name": "グレースロート",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        },
        {
            "mode": "S2",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 192,
        "rare": 5,
        "name": "コールドショット",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "32"
        },
        {
            "mode": "S2",
            "pattern": "32"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 193,
        "rare": 5,
        "name": "シェーシャ",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "27"
        },
        {
            "mode": "S2",
            "pattern": "27"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 194,
        "rare": 5,
        "name": "ジエユン",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "27"
        },
        {
            "mode": "S2",
            "pattern": "52"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 195,
        "rare": 5,
        "name": "トギフォンス",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "29"
        },
        {
            "mode": "S2",
            "pattern": "29"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 196,
        "rare": 5,
        "name": "ファイヤーウォッチ",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "28"
        },
        {
            "mode": "S2",
            "pattern": "28"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 197,
        "rare": 5,
        "name": "プラチナ",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        },
        {
            "mode": "S2",
            "pattern": "27"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 198,
        "rare": 5,
        "name": "プロヴァンス",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "20"
        },
        {
            "mode": "S2",
            "pattern": "20"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 199,
        "rare": 5,
        "name": "メテオリーテ",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "27"
        },
        {
            "mode": "S2",
            "pattern": "27"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 200,
        "rare": 5,
        "name": "メラナイト",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "20"
        },
        {
            "mode": "S2",
            "pattern": "17"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 201,
        "rare": 5,
        "name": "ルナカブ",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "28"
        },
        {
            "mode": "S2",
            "pattern": "28"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 202,
        "rare": 5,
        "name": "寒芒クルース",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        },
        {
            "mode": "S2",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 203,
        "rare": 5,
        "name": "承曦グレイ",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "28"
        },
        {
            "mode": "S2",
            "pattern": "28"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 204,
        "rare": 5,
        "name": "アイリス",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "17"
        },
        {
            "mode": "S2",
            "pattern": "37"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 205,
        "rare": 5,
        "name": "アステジーニ",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "16"
        },
        {
            "mode": "S2",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 206,
        "rare": 5,
        "name": "アブサント",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "16"
        },
        {
            "mode": "S2",
            "pattern": "16"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 207,
        "rare": 5,
        "name": "アロマ",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "36"
        },
        {
            "mode": "S2",
            "pattern": "36"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 208,
        "rare": 5,
        "name": "アーミヤ",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "16"
        },
        {
            "mode": "S2",
            "pattern": "16"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 209,
        "rare": 5,
        "name": "イェラ",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "16"
        },
        {
            "mode": "S2",
            "pattern": "16"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 210,
        "rare": 5,
        "name": "ウォーミー",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "16"
        },
        {
            "mode": "S2",
            "pattern": "16"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 211,
        "rare": 5,
        "name": "カニパラート",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "16"
        },
        {
            "mode": "S2",
            "pattern": "16"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 212,
        "rare": 5,
        "name": "コロセラム",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "36"
        },
        {
            "mode": "S2",
            "pattern": "36"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 213,
        "rare": 5,
        "name": "サンタラ",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "20"
        },
        {
            "mode": "S2",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 214,
        "rare": 5,
        "name": "スカイフレア",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "20"
        },
        {
            "mode": "S2",
            "pattern": "20"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 215,
        "rare": 5,
        "name": "ディアマンテ",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "16"
        },
        {
            "mode": "S2",
            "pattern": "16"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 216,
        "rare": 5,
        "name": "テクノ",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "16"
        },
        {
            "mode": "S2",
            "pattern": "16"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 217,
        "rare": 5,
        "name": "デルフィーン",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "17"
        },
        {
            "mode": "S2",
            "pattern": "37"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 218,
        "rare": 5,
        "name": "トミミ",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "14"
        },
        {
            "mode": "S2",
            "pattern": "14"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 219,
        "rare": 5,
        "name": "ナイトメア",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "16"
        },
        {
            "mode": "S2",
            "pattern": "16"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 220,
        "rare": 5,
        "name": "ハーモニー",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "17"
        },
        {
            "mode": "S2",
            "pattern": "37"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 221,
        "rare": 5,
        "name": "ビーズワクス",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "24"
        },
        {
            "mode": "S2",
            "pattern": "6"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 222,
        "rare": 5,
        "name": "ミニマリスト",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "16"
        },
        {
            "mode": "S2",
            "pattern": "16"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 223,
        "rare": 5,
        "name": "ミント",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "24"
        },
        {
            "mode": "S2",
            "pattern": "6"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 224,
        "rare": 5,
        "name": "レイズ",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "16"
        },
        {
            "mode": "S2",
            "pattern": "16"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 225,
        "rare": 5,
        "name": "レオンハルト",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "20"
        },
        {
            "mode": "S2",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 226,
        "rare": 5,
        "name": "ロックロック",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "16"
        },
        {
            "mode": "S2",
            "pattern": "16"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 227,
        "rare": 5,
        "name": "炎獄ラヴァ",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "16"
        },
        {
            "mode": "S2",
            "pattern": "20"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 228,
        "rare": 5,
        "name": "アーミヤ(医療)",
        "class": {
        "name": "medic",
        "label": "医療"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        },
        {
            "mode": "S2",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 229,
        "rare": 5,
        "name": "ヴァンデラ",
        "class": {
        "name": "medic",
        "label": "医療"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        },
        {
            "mode": "S2",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 230,
        "rare": 5,
        "name": "ウィスパーレイン",
        "class": {
        "name": "medic",
        "label": "医療"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "42"
        },
        {
            "mode": "S2",
            "pattern": "42"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 231,
        "rare": 5,
        "name": "サイレンス",
        "class": {
        "name": "medic",
        "label": "医療"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        },
        {
            "mode": "S2",
            "pattern": "18"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 232,
        "rare": 5,
        "name": "セイロン",
        "class": {
        "name": "medic",
        "label": "医療"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "42"
        },
        {
            "mode": "S2",
            "pattern": "42"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 233,
        "rare": 5,
        "name": "トゥイエ",
        "class": {
        "name": "medic",
        "label": "医療"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        },
        {
            "mode": "S2",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 234,
        "rare": 5,
        "name": "ノウエル",
        "class": {
        "name": "medic",
        "label": "医療"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "42"
        },
        {
            "mode": "S2",
            "pattern": "42"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 235,
        "rare": 5,
        "name": "ハニーベリー",
        "class": {
        "name": "medic",
        "label": "医療"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "43"
        },
        {
            "mode": "S2",
            "pattern": "43"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 236,
        "rare": 5,
        "name": "パピルス",
        "class": {
        "name": "medic",
        "label": "医療"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "30"
        },
        {
            "mode": "S2",
            "pattern": "30"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 237,
        "rare": 5,
        "name": "パプリカ",
        "class": {
        "name": "medic",
        "label": "医療"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "30"
        },
        {
            "mode": "S2",
            "pattern": "30"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 238,
        "rare": 5,
        "name": "ハロルド",
        "class": {
        "name": "medic",
        "label": "医療"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "43"
        },
        {
            "mode": "S2",
            "pattern": "43"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 239,
        "rare": 5,
        "name": "フィリオプシス",
        "class": {
        "name": "medic",
        "label": "医療"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "30"
        },
        {
            "mode": "S2",
            "pattern": "31"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 240,
        "rare": 5,
        "name": "フォリニック",
        "class": {
        "name": "medic",
        "label": "医療"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "39"
        },
        {
            "mode": "S2",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 241,
        "rare": 5,
        "name": "ブリーズ",
        "class": {
        "name": "medic",
        "label": "医療"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "30"
        },
        {
            "mode": "S2",
            "pattern": "30"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 242,
        "rare": 5,
        "name": "マルベリー",
        "class": {
        "name": "medic",
        "label": "医療"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "43"
        },
        {
            "mode": "S2",
            "pattern": "43"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 243,
        "rare": 5,
        "name": "ローズソルト",
        "class": {
        "name": "medic",
        "label": "医療"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "30"
        },
        {
            "mode": "S2",
            "pattern": "30"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 244,
        "rare": 5,
        "name": "ワルファリン",
        "class": {
        "name": "medic",
        "label": "医療"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        },
        {
            "mode": "S2",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 245,
        "rare": 5,
        "name": "濯塵ハイビスカス",
        "class": {
        "name": "medic",
        "label": "医療"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        },
        {
            "mode": "S2",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 246,
        "rare": 5,
        "name": "イースチナ",
        "class": {
        "name": "supporter",
        "label": "補助"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "30"
        },
        {
            "mode": "S2",
            "pattern": "24"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 247,
        "rare": 5,
        "name": "ヴァラルクビン",
        "class": {
        "name": "supporter",
        "label": "補助"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "30"
        },
        {
            "mode": "S2",
            "pattern": "30"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 248,
        "rare": 5,
        "name": "ウインドフリット",
        "class": {
        "name": "supporter",
        "label": "補助"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "18"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 249,
        "rare": 5,
        "name": "キャサリン",
        "class": {
        "name": "supporter",
        "label": "補助"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 250,
        "rare": 5,
        "name": "クエルクス",
        "class": {
        "name": "supporter",
        "label": "補助"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "46"
        },
        {
            "mode": "S2",
            "pattern": "46"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 251,
        "rare": 5,
        "name": "グラウコス",
        "class": {
        "name": "supporter",
        "label": "補助"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "30"
        },
        {
            "mode": "S2",
            "pattern": "53"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 252,
        "rare": 5,
        "name": "グレインバッズ",
        "class": {
        "name": "supporter",
        "label": "補助"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "30"
        },
        {
            "mode": "S2",
            "pattern": "30"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 253,
        "rare": 5,
        "name": "サンドレコナー",
        "class": {
        "name": "supporter",
        "label": "補助"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "16"
        },
        {
            "mode": "S2",
            "pattern": "16"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 254,
        "rare": 5,
        "name": "シィンズゥ",
        "class": {
        "name": "supporter",
        "label": "補助"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "46"
        },
        {
            "mode": "S2",
            "pattern": "46"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 255,
        "rare": 5,
        "name": "シャマレ",
        "class": {
        "name": "女",
        "label": "女"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "46"
        },
        {
            "mode": "S2",
            "pattern": "18"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 256,
        "rare": 5,
        "name": "シーン",
        "class": {
        "name": "supporter",
        "label": "補助"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "16"
        },
        {
            "mode": "S2",
            "pattern": "16"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 257,
        "rare": 5,
        "name": "ソラ",
        "class": {
        "name": "supporter",
        "label": "補助"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "54"
        },
        {
            "mode": "S2",
            "pattern": "6"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 258,
        "rare": 5,
        "name": "ツキノギ",
        "class": {
        "name": "supporter",
        "label": "補助"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "46"
        },
        {
            "mode": "S2",
            "pattern": "46"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 259,
        "rare": 5,
        "name": "ハイディ",
        "class": {
        "name": "supporter",
        "label": "補助"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "6"
        },
        {
            "mode": "S2",
            "pattern": "6"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 260,
        "rare": 5,
        "name": "プラマニクス",
        "class": {
        "name": "supporter",
        "label": "補助"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "46"
        },
        {
            "mode": "S2",
            "pattern": "46"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 261,
        "rare": 5,
        "name": "プロヴァイゾ",
        "class": {
        "name": "supporter",
        "label": "補助"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "30"
        },
        {
            "mode": "S2",
            "pattern": "30"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 262,
        "rare": 5,
        "name": "ボビング",
        "class": {
        "name": "supporter",
        "label": "補助"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "30"
        },
        {
            "mode": "S2",
            "pattern": "30"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 263,
        "rare": 5,
        "name": "メイヤー",
        "class": {
        "name": "supporter",
        "label": "補助"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "16"
        },
        {
            "mode": "S2",
            "pattern": "16"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 264,
        "rare": 5,
        "name": "ルシーラ",
        "class": {
        "name": "supporter",
        "label": "補助"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "46"
        },
        {
            "mode": "S2",
            "pattern": "46"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 265,
        "rare": 5,
        "name": "九色鹿",
        "class": {
        "name": "supporter",
        "label": "補助"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "46"
        },
        {
            "mode": "S2",
            "pattern": "46"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 266,
        "rare": 5,
        "name": "Frost",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        },
        {
            "mode": "S2",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 267,
        "rare": 5,
        "name": "Iana",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "6"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 268,
        "rare": 5,
        "name": "アーモンド",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "10"
        },
        {
            "mode": "S2",
            "pattern": "10"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 269,
        "rare": 5,
        "name": "ウユウ",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 270,
        "rare": 5,
        "name": "エフイーター",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "17"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 271,
        "rare": 5,
        "name": "エンフォーサー",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "1"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 272,
        "rare": 5,
        "name": "カゼマル",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 273,
        "rare": 5,
        "name": "カフカ",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "9"
        },
        {
            "mode": "S2",
            "pattern": "52"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 274,
        "rare": 5,
        "name": "キララ",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "47"
        },
        {
            "mode": "S2",
            "pattern": "47"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 275,
        "rare": 5,
        "name": "クリフハート",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "10"
        },
        {
            "mode": "S2",
            "pattern": "37"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 276,
        "rare": 5,
        "name": "スノーズント",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "10"
        },
        {
            "mode": "S2",
            "pattern": "10"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 277,
        "rare": 5,
        "name": "スプリア",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        },
        {
            "mode": "S2",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 278,
        "rare": 5,
        "name": "フィグリーノ",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "1"
        },
        {
            "mode": "S2",
            "pattern": "6"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 279,
        "rare": 5,
        "name": "ブリキ",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "49"
        },
        {
            "mode": "S2",
            "pattern": "49"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 280,
        "rare": 5,
        "name": "ベナ",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 281,
        "rare": 5,
        "name": "マンティコア",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "47"
        },
        {
            "mode": "S2",
            "pattern": "47"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 282,
        "rare": 5,
        "name": "レッド",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "9"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 283,
        "rare": 5,
        "name": "ロビン",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        },
        {
            "mode": "S2",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 284,
        "rare": 5,
        "name": "ワイフー",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "18"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 285,
        "rare": 5,
        "name": "ウルフェナイト",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        },
        {
            "mode": "S2",
            "pattern": "9"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 286,
        "rare": 5,
        "name": "ブリギッド",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "31"
        },
        {
            "mode": "S2",
            "pattern": "31"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 287,
        "rare": 5,
        "name": "アランナ",
        "class": {
        "name": "supporter",
        "label": "補助"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 288,
        "rare": 5,
        "name": "グレースベアラー",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "18"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 289,
        "rare": 5,
        "name": "ティッピ",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "22"
        },
        {
            "mode": "S2",
            "pattern": "47"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 290,
        "rare": 5,
        "name": "ミス・クリスティーン",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "16"
        },
        {
            "mode": "S2",
            "pattern": "16"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 291,
        "rare": 5,
        "name": "レコードキーパー",
        "class": {
        "name": "medic",
        "label": "医療"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        },
        {
            "mode": "S2",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 292,
        "rare": 5,
        "name": "キチセイ",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "34"
        },
        {
            "mode": "S2",
            "pattern": "34"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 293,
        "rare": 5,
        "name": "マツキリ",
        "class": {
        "name": "vanguard",
        "label": "先鋒"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 294,
        "rare": 5,
        "name": "チューリップ",
        "class": {
        "name": "vanguard",
        "label": "先鋒"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 295,
        "rare": 5,
        "name": "Sharp",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 296,
        "rare": 5,
        "name": "Stormeye",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        },
        {
            "mode": "S2",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 297,
        "rare": 5,
        "name": "Pith",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "20"
        },
        {
            "mode": "S2",
            "pattern": "20"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 298,
        "rare": 5,
        "name": "Touch",
        "class": {
        "name": "medic",
        "label": "医療"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        },
        {
            "mode": "S2",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 299,
        "rare": 4,
        "name": "ヴィグナ",
        "class": {
        "name": "vanguard",
        "label": "先鋒"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 300,
        "rare": 4,
        "name": "クーリエ",
        "class": {
        "name": "vanguard",
        "label": "先鋒"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 301,
        "rare": 4,
        "name": "スカベンジャー",
        "class": {
        "name": "vanguard",
        "label": "先鋒"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 302,
        "rare": 4,
        "name": "テンニンカ",
        "class": {
        "name": "vanguard",
        "label": "先鋒"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "18"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 303,
        "rare": 4,
        "name": "ビーンストーク",
        "class": {
        "name": "vanguard",
        "label": "先鋒"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        },
        {
            "mode": "S2",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 304,
        "rare": 4,
        "name": "アレーン",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "5"
        },
        {
            "mode": "S2",
            "pattern": "16"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 305,
        "rare": 4,
        "name": "ウタゲ",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 306,
        "rare": 4,
        "name": "エステル",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 307,
        "rare": 4,
        "name": "カッター",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "5"
        },
        {
            "mode": "S2",
            "pattern": "6"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 308,
        "rare": 4,
        "name": "クォーツ",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 309,
        "rare": 4,
        "name": "コンビクション",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "6"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 310,
        "rare": 4,
        "name": "ジャッキー",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 311,
        "rare": 4,
        "name": "ドーベルマン",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "1"
        },
        {
            "mode": "S2",
            "pattern": "1"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 312,
        "rare": 4,
        "name": "ビーハンター",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 313,
        "rare": 4,
        "name": "ヒューマス",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "12"
        },
        {
            "mode": "S2",
            "pattern": "12"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 314,
        "rare": 4,
        "name": "フロストリーフ",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "5"
        },
        {
            "mode": "S2",
            "pattern": "5"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 315,
        "rare": 4,
        "name": "マトイマル",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 316,
        "rare": 4,
        "name": "ムース",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 317,
        "rare": 4,
        "name": "羅小黒",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "9"
        },
        {
            "mode": "S2",
            "pattern": "5"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 318,
        "rare": 4,
        "name": "クオーラ",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "21"
        },
        {
            "mode": "S2",
            "pattern": "21"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 319,
        "rare": 4,
        "name": "グム",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "18"
        },
        {
            "mode": "S2",
            "pattern": "18"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 320,
        "rare": 4,
        "name": "ジュナー",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "21"
        },
        {
            "mode": "S2",
            "pattern": "21"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 321,
        "rare": 4,
        "name": "バブル",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "21"
        },
        {
            "mode": "S2",
            "pattern": "21"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 322,
        "rare": 4,
        "name": "マッターホルン",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "21"
        },
        {
            "mode": "S2",
            "pattern": "21"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 323,
        "rare": 4,
        "name": "ルトナダ",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "21"
        },
        {
            "mode": "S2",
            "pattern": "18"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 324,
        "rare": 4,
        "name": "アシッドドロップ",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "20"
        },
        {
            "mode": "S2",
            "pattern": "20"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 325,
        "rare": 4,
        "name": "アンブリエル",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "27"
        },
        {
            "mode": "S2",
            "pattern": "28"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 326,
        "rare": 4,
        "name": "ヴァーミル",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        },
        {
            "mode": "S2",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 327,
        "rare": 4,
        "name": "ケイパー",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "31"
        },
        {
            "mode": "S2",
            "pattern": "31"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 328,
        "rare": 4,
        "name": "ジェシカ",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        },
        {
            "mode": "S2",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 329,
        "rare": 4,
        "name": "シラユキ",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "55"
        },
        {
            "mode": "S2",
            "pattern": "27"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 330,
        "rare": 4,
        "name": "トター",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "29"
        },
        {
            "mode": "S2",
            "pattern": "29"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 331,
        "rare": 4,
        "name": "パインコーン",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "34"
        },
        {
            "mode": "S2",
            "pattern": "12"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 332,
        "rare": 4,
        "name": "メイ",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        },
        {
            "mode": "S2",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 333,
        "rare": 4,
        "name": "メテオ",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        },
        {
            "mode": "S2",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 334,
        "rare": 4,
        "name": "インディゴ",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "17"
        },
        {
            "mode": "S2",
            "pattern": "37"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 335,
        "rare": 4,
        "name": "カシャ",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "16"
        },
        {
            "mode": "S2",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 336,
        "rare": 4,
        "name": "ギターノ",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "20"
        },
        {
            "mode": "S2",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 337,
        "rare": 4,
        "name": "グレイ",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "20"
        },
        {
            "mode": "S2",
            "pattern": "20"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 338,
        "rare": 4,
        "name": "プリン",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "16"
        },
        {
            "mode": "S2",
            "pattern": "16"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 339,
        "rare": 4,
        "name": "ヘイズ",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "16"
        },
        {
            "mode": "S2",
            "pattern": "16"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 340,
        "rare": 4,
        "name": "ガヴィル",
        "class": {
        "name": "medic",
        "label": "医療"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        },
        {
            "mode": "S2",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 341,
        "rare": 4,
        "name": "ススーロ",
        "class": {
        "name": "medic",
        "label": "医療"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        },
        {
            "mode": "S2",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 342,
        "rare": 4,
        "name": "セイリュウ",
        "class": {
        "name": "medic",
        "label": "医療"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "42"
        },
        {
            "mode": "S2",
            "pattern": "42"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 343,
        "rare": 4,
        "name": "チェストナット",
        "class": {
        "name": "medic",
        "label": "医療"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "43"
        },
        {
            "mode": "S2",
            "pattern": "10"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 344,
        "rare": 4,
        "name": "パフューマー",
        "class": {
        "name": "medic",
        "label": "医療"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "30"
        },
        {
            "mode": "S2",
            "pattern": "30"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 345,
        "rare": 4,
        "name": "ミルラ",
        "class": {
        "name": "medic",
        "label": "医療"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        },
        {
            "mode": "S2",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 346,
        "rare": 4,
        "name": "アーススピリット",
        "class": {
        "name": "supporter",
        "label": "補助"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "30"
        },
        {
            "mode": "S2",
            "pattern": "30"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 347,
        "rare": 4,
        "name": "ディピカ",
        "class": {
        "name": "supporter",
        "label": "補助"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "16"
        },
        {
            "mode": "S2",
            "pattern": "16"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 348,
        "rare": 4,
        "name": "ポデンコ",
        "class": {
        "name": "supporter",
        "label": "補助"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "30"
        },
        {
            "mode": "S2",
            "pattern": "30"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 349,
        "rare": 4,
        "name": "ロベルタ",
        "class": {
        "name": "supporter",
        "label": "補助"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 350,
        "rare": 4,
        "name": "イーサン",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "47"
        },
        {
            "mode": "S2",
            "pattern": "47"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 351,
        "rare": 4,
        "name": "ヴァーダント",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 352,
        "rare": 4,
        "name": "グラベル",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 353,
        "rare": 4,
        "name": "コントレイル",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "22"
        },
        {
            "mode": "S2",
            "pattern": "16"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 354,
        "rare": 4,
        "name": "ジェイ",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "18"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 355,
        "rare": 4,
        "name": "ショウ",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        },
        {
            "mode": "S2",
            "pattern": "1"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 356,
        "rare": 4,
        "name": "ロープ",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "10"
        },
        {
            "mode": "S2",
            "pattern": "17"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 357,
        "rare": 4,
        "name": "ウインドスクート",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "14"
        },
        {
            "mode": "S2",
            "pattern": "22"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 358,
        "rare": 3,
        "name": "バニラ",
        "class": {
        "name": "vanguard",
        "label": "先鋒"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 359,
        "rare": 3,
        "name": "フェン",
        "class": {
        "name": "vanguard",
        "label": "先鋒"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 360,
        "rare": 3,
        "name": "プリュム",
        "class": {
        "name": "vanguard",
        "label": "先鋒"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 361,
        "rare": 3,
        "name": "ポプカル",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 362,
        "rare": 3,
        "name": "ミッドナイト",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "5"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 363,
        "rare": 3,
        "name": "メランサ",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 364,
        "rare": 3,
        "name": "カーディ",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "21"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 365,
        "rare": 3,
        "name": "スポット",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "18"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 366,
        "rare": 3,
        "name": "ビーグル",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "21"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 367,
        "rare": 3,
        "name": "アドナキエル",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 368,
        "rare": 3,
        "name": "カタパルト",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "39"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 369,
        "rare": 3,
        "name": "クルース",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 370,
        "rare": 3,
        "name": "スチュワード",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "16"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 371,
        "rare": 3,
        "name": "ラヴァ",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "20"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 372,
        "rare": 3,
        "name": "アンセル",
        "class": {
        "name": "medic",
        "label": "医療"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "39"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 373,
        "rare": 3,
        "name": "ハイビスカス",
        "class": {
        "name": "medic",
        "label": "医療"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 374,
        "rare": 3,
        "name": "オーキッド",
        "class": {
        "name": "supporter",
        "label": "補助"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "30"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 375,
        "rare": 3,
        "name": "予備隊員-近距離",
        "class": {
        "name": "vanguard",
        "label": "先鋒"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 376,
        "rare": 3,
        "name": "予備隊員-重装",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "21"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 377,
        "rare": 3,
        "name": "予備隊員-狙撃",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 378,
        "rare": 3,
        "name": "予備隊員-術師",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "16"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 379,
        "rare": 3,
        "name": "予備隊員-支援",
        "class": {
        "name": "medic",
        "label": "医療"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 380,
        "rare": 2,
        "name": "ヤトウ",
        "class": {
        "name": "vanguard",
        "label": "先鋒"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 381,
        "rare": 2,
        "name": "ノイルホーン",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "21"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 382,
        "rare": 2,
        "name": "レンジャー",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "16"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 383,
        "rare": 2,
        "name": "12F",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "22"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 384,
        "rare": 2,
        "name": "ドゥリン",
        "class": {
        "name": "caster",
        "label": "術師"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "20"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 385,
        "rare": 1,
        "name": "Castle-3",
        "class": {
        "name": "guard",
        "label": "前衛"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 386,
        "rare": 1,
        "name": "Friston-3",
        "class": {
        "name": "defender",
        "label": "重装"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "21"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 387,
        "rare": 1,
        "name": "ジャスティスナイト",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "16"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 388,
        "rare": 1,
        "name": "テラ大陸調査団",
        "class": {
        "name": "sniper",
        "label": "狙撃"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "3"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 389,
        "rare": 1,
        "name": "Lancet-2",
        "class": {
        "name": "medic",
        "label": "医療"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "16"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 390,
        "rare": 1,
        "name": "PhonoR-0",
        "class": {
        "name": "supporter",
        "label": "補助"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "30"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 391,
        "rare": 1,
        "name": "U-Official",
        "class": {
        "name": "supporter",
        "label": "補助"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "18"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 392,
        "rare": 1,
        "name": "THRM-EX",
        "class": {
        "name": "specialist",
        "label": "特殊"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "18"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    },
    {
        "id": 393,
        "rare": 1,
        "name": "CONFESS-47",
        "class": {
        "name": "vanguard",
        "label": "先鋒"
        },
        "skills": [
        {
            "mode": "S1",
            "pattern": "4"
        }
        ],
        "x": 0,
        "y": 0,
        "facing": "E",
        "skillIdx": 0
    }
]
