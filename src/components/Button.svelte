<script lang="ts">
 const baseStyles = 'inline-block border-none rounded-3xl font-sans font-semibold cursor-pointer';

  const modeStyles = {
    primary: 'text-white bg-blue-600',
    secondary: 'text-black bg-transparent shadow-[0px_0px_0px_1px_rgba(0,0,0,0.15)_inset]',
  };

 const sizeStyles = {
   small: 'text-xs py-1.5 px-3',
   medium: 'text-base py-2 px-5',
   large: 'text-lg py-3 px-6',
 };

  /**
   * Is this the principal call to action on the page?
   */
 export let primary = false;

  /**
   * What background color to use
   */
 export let backgroundColor: string | undefined = undefined;
  /**
   * How large should the button be?
   */
 export let size: 'small' | 'medium' | 'large' = 'medium';
 /**
  * Button contents
  */
 export let label: string = '';

 $: mode = primary ? "primary" : "secondary";

 $: style = backgroundColor ? `background-color: ${backgroundColor}` : '';
</script>

<button
  type="button"
  class={[`${baseStyles}`, `${sizeStyles[size]}`, `${modeStyles[mode]}`].join(' ')}
  {style}
  on:click
>
  {label}
</button>
