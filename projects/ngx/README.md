@mukhuve/ngx is a tools package for angular apps

# Demo
ngx.mukhuve.com

# Installation

```bash
npm install @mukhuve/ngx
```

# Usage

## Dialog    

```typescript
import { DialogModule } from '@mukhuve/ngx/dialog';

@NgModule({
  imports: [
    DialogModule
  ]
})
export class AppModule { }
```
...
```typescript
import { DialogService } from '@mukhuve/ngx/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private dialogService: DialogService) {}

  openDialog() {
    this.dialogService.open({
    });
  }
}
```