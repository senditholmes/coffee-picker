interface Props {
    children?: React.ReactNode
  }

  export const Footer: React.FC<Props> = (props) => {
    return (
        <footer className="flex h-16">
            <nav className="p-5">LOGO</nav>
        </footer>
    )
  }