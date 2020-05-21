import { ITheme } from "./ITheme";

export const GLight : ITheme = {

	DisplayName: 'Glight',

	CodeStyles: {
		Keyword: 'color:#066A85',
		Comment: 'color:#38B519',
		Plaintext: 'color:#545454',
		Punctuation: 'color:#545454',
		String: 'color:#F14729',
		Literal: 'color:#0F0301',
		Type: 'color:#82B4C1',
		Tag: 'color:#82B4C1',
		AttributeName: 'color:#055F77;font-weight:bold',
		AttributeValue: 'color:#066a85',
		Decimal: 'color:#B44E3A',
		NoCode: 'color:#000;background-color:none;'
	},

	// Background color
	BackgroundStyle: 'background-color:#fefefe;',

	// Line number background colors
	LineNumberStyle: 'color:#313131'
}
