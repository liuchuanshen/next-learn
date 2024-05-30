/*
 * @Author: Chanson Lau 
 * @Date: 2024-05-30 17:54:30
 * @LastEditors: Chanson Lau 
 * @LastEditTime: 2024-05-30 18:00:04
 * @FilePath: /code/nextjs-dashboard/app/ui/fonts.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Inter, Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
  });