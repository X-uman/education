
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const ArticleTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const title = fileData.frontmatter?.title
  if (title) {
    return <h1 class={classNames(displayClass, "article-title")}>{title}</h1>
  } else {
    return null
  }
}

ArticleTitle.css = `
.article-title {
  margin: 2rem 0 0 0;
  font-family: 'Arial', sans-serif; /* Customize the font family */
  font-size: 2rem; /* Customize the font size */
  font-weight: bold; /* Customize the font weight */
  color: #333; /* Customize the font color */
}
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor
