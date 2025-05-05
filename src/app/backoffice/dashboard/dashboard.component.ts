import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  effect,
  inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-dashboard',
  imports: [ChartModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  basicData: any;

  basicOptions: any;

  platformId = inject(PLATFORM_ID);

  // configService = inject(AppConfigService);

  constructor(private cd: ChangeDetectorRef) {}

  // themeEffect = effect(() => {
  //   if (this.configService.transitionComplete()) {
  //     if (this.designerService.preset()) {
  //       this.initChart();
  //     }
  //   }
  // });

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--p-text-color');
      const textColorSecondary = documentStyle.getPropertyValue(
        '--p-text-muted-color'
      );
      const surfaceBorder = documentStyle.getPropertyValue(
        '--p-content-border-color'
      );

      this.basicData = {
        labels: [
          '4/22 \n tue',
          '4/23 wed',
          '4/24 thu',
          '4/25 fri',
          '4/22 tue',
          '4/23 wed',
          '4/24 thu',
          '4/25 fri',
        ],
        datasets: [
          {
            label: 'Sales',
            data: [1350, 2000, 650, 1100, 1350, 2000, 650, 1100],
            backgroundColor: ['#0A94FC'],
            borderColor: ['#C9E0FF'],
            borderWidth: 2,
          },
        ],
      };

      this.basicOptions = {
        plugins: {
          legend: {
            labels: {
              color: textColor,
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary,
              font: {
                weight: 500,
                size: 16,
              },
            },
            grid: {
              color: surfaceBorder,
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
            },
          },
        },
      };
      this.cd.markForCheck();
    }
  }
}

// if (isPlatformBrowser(this.platformId)) {
//           const documentStyle = getComputedStyle(document.documentElement);
//           const textColor = documentStyle.getPropertyValue('--p-text-color');
//           const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
//           const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

//           this.data = {
//               labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//               datasets: [
//                   {
//                       label: 'My First dataset',
//                       backgroundColor: documentStyle.getPropertyValue('--p-cyan-500'),
//                       borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
//                       data: [65, 59, 80, 81, 56, 55, 40]
//                   },
//                   {
//                       label: 'My Second dataset',
//                       backgroundColor: documentStyle.getPropertyValue('--p-gray-500'),
//                       borderColor: documentStyle.getPropertyValue('--p-gray-500'),
//                       data: [28, 48, 40, 19, 86, 27, 90]
//                   }
//               ]
//           };

//         this.options = {
//             maintainAspectRatio: false,
//             aspectRatio: 0.8,
//             plugins: {
//                 legend: {
//                     labels: {
//                         color: textColor
//                     }
//                 }
//             },
//             scales: {
//                 x: {
//                     ticks: {
//                         color: textColorSecondary,
//                         font: {
//                             weight: 500
//                         }
//                     },
//                     grid: {
//                         color: surfaceBorder,
//                         drawBorder: false
//                     }
//                 },
//                 y: {
//                     ticks: {
//                         color: textColorSecondary
//                     },
//                     grid: {
//                         color: surfaceBorder,
//                         drawBorder: false
//                     }
//                 }
//             }
//         };
//         this.cd.markForCheck()
//     }
// }
