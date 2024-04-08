interface Props {
    children?: React.ReactNode
  }

  export const Header: React.FC<Props> = (props) => {
    return (
        <header className="flex h-16">
            <nav className="p-5">HOME</nav>
        </header>
    )
  }