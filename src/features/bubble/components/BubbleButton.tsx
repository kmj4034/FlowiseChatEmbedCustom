import { Show } from 'solid-js';
import { isNotDefined } from '@/utils/index';
import { ButtonTheme } from '../types';

type Props = ButtonTheme & {
  isBotOpened: boolean;
  toggleBot: () => void;
};

const defaultButtonColor = '#3B81F6';
const defaultIconColor = 'white';
const defaultBottom = '20';
const defaultRight = '20';

export const BubbleButton = (props: Props) => {
  return (
    <div class="relative">
      <img
        src="https://static-files-theh.s3.ap-northeast-2.amazonaws.com/bubble-icon.png"
        alt="Floating image"
        class="fixed pointer-events-none"
        style={{
          width: '150px',
          height: 'auto',
          'z-index': 42424242,
          // right: props.right ? `${props.right.toString()}px` : `${defaultRight}px`,
          right: '35px',
          bottom: props.bottom ? `${(Number(props.bottom) + 150).toString()}px` : `${Number(defaultBottom) + 150}px`,
          border: 'none',
        }}
      />
      <button
        part="button"
        onClick={() => props.toggleBot()}
        class={
          `fixed shadow-md rounded-full hover:scale-110 active:scale-95 transition-transform duration-200 flex justify-center items-center animate-fade-in` +
          (props.size === 'large' ? ' w-17 h-16' : ' w-12 h-12')
        }
        style={{
          'background-color': props.backgroundColor ?? defaultButtonColor,
          'z-index': 42424243,
          // right: props.right ? `${props.right.toString()}px` : `${defaultRight}px`,
          right: '13px',
          bottom: props.bottom ? `${(Number(props.bottom) + 72).toString()}px` : `${(Number(defaultBottom) + 72).toString()}px`,
          border: 'none',
          'box-shadow': 'none',
        }}
      >
        <Show when={isNotDefined(props.customIconSrc)} keyed>
          <svg
            viewBox="0 0 24 24"
            style={{
              stroke: props.iconColor ?? defaultIconColor,
            }}
            class={
              `stroke-2 fill-transparent absolute duration-200 transition ` +
              (props.isBotOpened ? 'scale-0 opacity-0' : 'scale-100 opacity-100') +
              (props.size === 'large' ? ' w-9' : ' w-7')
            }
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </Show>
        <Show when={props.customIconSrc}>
          <img
            src={props.customIconSrc}
            class={
              'object-cover' +
              (props.isBotOpened ? 'scale-0 opacity-0' : 'scale-100 opacity-100') +
              (props.size === 'large' ? ' w-20 h-20' : ' w-9 h-9')
            }
            alt="Bubble button icon"
          />
        </Show>

        <svg
          viewBox="0 0 24 24"
          style={{ fill: props.iconColor ?? 'white' }}
          class={
            `absolute duration-200 transition ` +
            (props.isBotOpened ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-180 opacity-0') +
            (props.size === 'large' ? ' w-9' : ' w-7')
          }
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.601 8.39897C18.269 8.06702 17.7309 8.06702 17.3989 8.39897L12 13.7979L6.60099 8.39897C6.26904 8.06702 5.73086 8.06702 5.39891 8.39897C5.06696 8.73091 5.06696 9.2691 5.39891 9.60105L11.3989 15.601C11.7309 15.933 12.269 15.933 12.601 15.601L18.601 9.60105C18.9329 9.2691 18.9329 8.73091 18.601 8.39897Z"
          />
        </svg>
      </button>
      <button
        part="button"
        onClick={() => window.open('https://chat.aitheh.com/loan/start?isCommonUser=true', '_blank')}
        class={
          `fixed shadow-md rounded-full hover:scale-110 active:scale-95 transition-transform duration-200 flex justify-center items-center animate-fade-in` +
          (props.size === 'large' ? ' w-16 h-16' : ' w-12 h-12')
        }
        style={{
          'background-color': props.backgroundColor ?? defaultButtonColor,
          'z-index': 42424243,
          // right: props.right ? `${props.right.toString()}px` : `${defaultRight}px`,
          right: '20px',
          bottom: props.bottom ? `${props.bottom.toString()}px` : `${defaultBottom}px`,
          border: 'none',
          'border-radius': '22px',
          background: 'var(--GR_01, linear-gradient(180deg, #5D7CF6 0%, #4E3CF4 100%))',
          // 'box-shadow': '0px 4px 6px -1px rgba(0, 0, 0, 0.10), 0px 2px 4px -2px rgba(0, 0, 0, 0.10)',
          'box-shadow': '0px 6.529px 8.94px 0px rgba(0, 0, 0, 0.12)',
        }}
      >
        <span
          style={{
            color: '#FFF',
            'font-family': 'Pretendard',
            'font-size': '18px',
            'font-style': 'normal',
            'font-weight': 600,
            'line-height': '24px' /* 125% */,
          }}
        >
          상담
          <br />
          시작
        </span>
      </button>
    </div>
  );
};
