// ===== フィールド属性（表示のみ） =====
export const ATTR_BLOCK = 1; // 配置不可
export const ATTR_EFF   = 2; // 効果

// ===== フィールド定義 =====
export	const fieldTypes = [
		{ key: 'empty',     label: '何もなし',  color: '#f4f4f5' },
		{ key: 'ground',    label: '地上',      color: '#a9a9a9' },
		{ key: 'high',      label: '高台',      color: '#bfdbfe' },
		{ key: 'stair',     label: '階段',      color: '#fde68a' },
		{ key: 'enemyBase', label: '相手拠点',  color: '#ED1A3D' },
		{ key: 'allyBase',  label: '自拠点',    color: '#1A3DED' },
	];
