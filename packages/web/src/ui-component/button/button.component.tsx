import styles from "./button.module.css"
import { Icon } from "../icon/icon.component"
import type { PropsWithChildren } from "react"
import { memoComponent } from "../memo-component/memo-component"

export const Button = memoComponent(
  "Button",
  function ({
    iconName,
    frontIcon,
    title,
    titleSize = "small",
    subTitle,
    mode = "medium",
    className,
    ...otherProps
  }: PropsWithChildren<
    {
      iconName?: string
      titleSize?: "small" | "medium" | "large"
      frontIcon?: string
      subTitle?: string
      title?: string
      mode?: "small" | "medium" | "large"
    } & React.ButtonHTMLAttributes<HTMLButtonElement>
  >) {
    const buttonClasses = [
      className || "",
      styles.button,
      mode === "small" ? styles.small : "",
      mode === "medium" ? styles.medium : "",
      mode === "large" ? styles.large : "",
    ]
      .filter(Boolean)
      .join(" ")

    const titleClasses = [
      styles.title,
      titleSize === "small" ? styles.titleSmall : "",
      titleSize === "medium" ? styles.titleMedium : "",
      titleSize === "large" ? styles.titleLarge : "",
    ]
      .filter(Boolean)
      .join(" ")

    return (
      <button type="button" {...otherProps} className={buttonClasses}>
        {frontIcon && <Icon className={styles.frontIcon} name={frontIcon} />}
        <div className={styles.name}>
          {title && <span className={titleClasses}>{title}</span>}
          {subTitle && <span className={styles.subTitle}>{subTitle}</span>}
        </div>
        {iconName && (
          <div className={styles.iconWrapper}>
            <Icon
              name={iconName}
              className={styles.icon}
              style={{ fontSize: "0.7rem" }}
            />
          </div>
        )}
      </button>
    )
  },
)
