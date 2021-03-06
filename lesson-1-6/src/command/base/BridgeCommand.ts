import ICommand from '../ICommand';
import IInjectableCommand from '../IInjectableCommand';

export default class BridgeCommand implements IInjectableCommand {
	constructor(
		private internalCommand?: ICommand
	) {}

	public inject(internalCommand: ICommand) {
		this.internalCommand = internalCommand
	}

	public execute() {
		this.internalCommand?.execute()
	}
}