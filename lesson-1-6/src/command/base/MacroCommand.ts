import ICommand from '../ICommand';

export default class MacroCommand implements ICommand {
	constructor(
		private commands: ICommand[]
	) {}

	public execute(): void {
		for (const command of this.commands) {
			command.execute()
		}
	}
}