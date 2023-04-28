import { defineComponent, ExtractPropTypes, PropType, warn } from 'vue';
import './dist.css';

export const paperCorners = {
  /**
   * The link to your project page.
   */
  link: {
    type: String,
    defalut: '',
  },
  /**
   * The color of the paper.
   * @default #eee
   */
  color: {
    type: String,
    defalut: '#eee',
  },
  /**
   * The background color of the corner.
   * @default #fff
   */
  bgColor: {
    type: String,
    defalut: '#fff',
  },
  /**
   * The horizontal position of the corner.
   * @default right
   */
  positionX: {
    type: String as PropType<'right' | 'left'>,
    defalut: 'right',
  },
  /**
   * The vertical position of the corner.
   * @default bottom
   */
  positionY: {
    type: String as PropType<'top' | 'bottom'>,
    defalut: 'bottom',
  },
};

type ExtractPublicPropTypes<T> = Omit<Partial<ExtractPropTypes<T>>, Extract<keyof T, `internal${string}`>>;

export type TabPaneProps = ExtractPublicPropTypes<typeof paperCorners>;

export default defineComponent({
  name: 'PaperCorners',
  props: paperCorners,
  setup(props, { attrs, slots }) {
    return () => {
      let size: string = '40px';
      const { link, color = '#eee', bgColor = '#fff', positionX = 'right', positionY = 'bottom' } = props;
      const slotContent = slots.default ? slots.default() : null;

      if (slotContent === null) {
        warn('Slot content cannot be null in PaperCorners component.');
        return;
      }

      if (attrs['size']) {
        size = !!Number(attrs['size']) ? attrs['size'] + 'px' : (attrs['size'] as string);
      }

      const cornerItems = (
        <>
          <div class={`corner-shadow ${positionX} ${positionY}`} style={`border-width: 0 0 ${size} ${size};`}></div>
          <div
            class={`corner-square ${positionX} ${positionY}`}
            style={`border-width: 0 0 ${size} ${size}; border-color: transparent transparent ${bgColor} transparent;`}
          ></div>
          <div
            class={`corner-cut ${positionX} ${positionY}`}
            style={`border-width: ${size} ${size} 0 0; left: ${size}; right: ${size}; top: -${size};`}
          ></div>
        </>
      );

      return (
        <div class="corner-container" style={`background: ${color};`}>
          {slotContent}
          <div class={`corner-box ${positionX} ${positionY}`} style={`height: ${size};`}>
            {link ? (
              <a href={`${link}`} target="_blank">
                {cornerItems}
              </a>
            ) : (
              cornerItems
            )}
          </div>
        </div>
      );
    };
  },
});
