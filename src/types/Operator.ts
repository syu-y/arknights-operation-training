// サンプルのオペレーター種別（必要に応じて追加/変更）
// export	type OpType = {
// 		vanguard: { label: '前衛',  pattern: 'front1' }, // 前方1マス
// 		sniper:   { label: '狙撃',  pattern: 'line3'  }, // 前方直線3
// 		caster:   { label: '術師',  pattern: 'diamond2' }, // 菱形2（マンハッタン距離<=2）
// 	};

// export type OpType = 'vanguard' | 'sniper' | 'caster'
export type OpType = {
    name: 'vanguard' | 'sniper' | 'caster'
    label: '前衛' | '狙撃' | '術師'
}
export type PatternType = 'line:1' | 'line:2' | 'line:3' | 'diamond:1' | 'diamond:2' | 'diamond:3'
export type ModeType = 'S1' | 'S2' | 'S3'
export type SkillType = {
    mode: ModeType,
    pattern: PatternType
}
export type FaceType = 'N' | 'W' | 'S' | 'E'

export  type Operator = {
    id: number,
    name: string,
    type: OpType,
    skills: SkillType[],
    x: number,
    y: number,
    facing: FaceType
    skillIdx: number
};

export const opLists: Operator[] = [
        {
            id: 1,
            name: 'オペレーター1',
            type: { name: 'vanguard', label: '前衛'},
            skills: [{ mode: "S1", pattern: "line:1"},{ mode: "S2", pattern: "line:2"}, { mode: "S3", pattern: "line:3"}],
            x: 0,
            y: 0,
            facing: 'N',
            skillIdx: 0 
    },
    {
        id: 2,
        name: 'オペレーター2',
        type: { name: 'sniper', label: '狙撃'},
        skills: [{ mode: "S1", pattern: "line:3"},{ mode: "S2", pattern: "line:3"}, { mode: "S3", pattern: "line:3"}],
        x: 0,
        y: 0,
        facing: 'N',
        skillIdx: 0 
    },
    {
        id: 3,
        name: 'オペレーター3',
        type: { name: 'caster', label: '術師'},
        skills: [{ mode: "S1", pattern: "diamond:2"},{ mode: "S2", pattern: "diamond:2"}, { mode: "S3", pattern: "diamond:3"}],
        x: 0,
        y: 0,
        facing: 'N',
        skillIdx: 0 
    }
]
