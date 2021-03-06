namespace Game {
	/**
	 * Удаляемая команда должна быть реализована с помощью паттерна Bridge.
	 * Команда хранит внутри ссылку на команду, которая и обеспечивает необходимое действие.
	 * При удалении - удаляется не сама команда, а переписывается ссылка на внутреннюю команду -
	 * вместо нее записывается ссылка на команду, которая ничего не делает.
	 * @link https://bit.ly/3t2rmZV
	 */
	export interface InjectableCommand {
		internalCommand?: ICommand
		inject(other: ICommand): void
	}
}