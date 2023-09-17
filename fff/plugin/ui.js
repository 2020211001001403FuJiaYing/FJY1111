import {
	Button,
	Cell,
	CellGroup,
	DropdownMenu,
	DropdownItem,
	Field,
	Checkbox,
	CheckboxGroup,
	RadioGroup,
	Radio,
	List
} from 'vant';
import {
	createSSRApp
} from 'vue'

// 2. 引入组件样式
import 'vant/lib/index.css';

const myPlugin = {}

myPlugin.install = (app) => {

	app.use(Button)
	app.use(Cell)
	app.use(CellGroup)
	app.use(DropdownMenu)
	app.use(DropdownItem)
	app.use(Field)
	app.use(Checkbox)
	app.use(CheckboxGroup)
	app.use(RadioGroup)
	app.use(Radio)
	app.use(List)

}

export default myPlugin;