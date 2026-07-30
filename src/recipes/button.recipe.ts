import { defineRecipe } from '@pandacss/dev'

export const buttonRecipe = defineRecipe({
    className: 'button',
    description: 'The styles for the Button component',
    base: {
        cursor: 'pointer',
        borderRadius: '2px',
        display: 'flex',
        textTransform: 'uppercase'
    },
    variants: {
        colorScheme: {
            primary: {
                '--button-color-default': 'colors.primary',
                '--button-color-contrast': 'colors.neutral.0',
            }
        },
        size: {
            sm: {
                textStyle: 'body.sm.bold',
                padding: '{spacing.x1} {spacing.x3}'
            },
            md: {
                textStyle: 'body.md.bold',
                padding: '{spacing.x1} {spacing.x3}'
            },
            lg: {
                textStyle: 'body.lg.bold',
                padding: '{spacing.x1} {spacing.x4}'
            },
        },
        appearance: {
            outline: {
                color: 'var(--button-color-default)',
                border: 'solid var(--button-color-default) 1px',
            },
            ghost: {
                color: 'var(--button-color-default)'
            },
            filled: {
                backgroundColor: 'var(--button-color-default)',
                color: 'var(--button-color-contrast)'
            }
        }
    },
    defaultVariants: {
        appearance: 'filled',
        size: 'md',
        colorScheme: 'primary'
    }
})