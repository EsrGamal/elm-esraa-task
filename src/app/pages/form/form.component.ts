import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputText } from 'primeng/inputtext';
import { Button } from 'primeng/button';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddon } from 'primeng/inputgroupaddon';

interface Step {
  title: string;
  description: string;
}

@Component({
  selector: 'app-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputText,
    Button,
    IconField,
    InputIcon,
    InputGroup,
    InputGroupAddon,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  form: FormGroup;

  readonly steps: Step[] = [
    { title: 'الخطوة الأولى', description: 'وصف الخطوة' },
    { title: 'الخطوة الثانية', description: 'وصف الخطوة' },
    { title: 'الخطوة الثالثة', description: 'وصف الخطوة' },
  ];

  currentStep = signal(1);
  statusMessage = signal('');

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      req1: ['', Validators.required],
      opt1: [''],
      req2: ['', Validators.required],
      opt2: [''],
      req3: ['', Validators.required],
      opt3: [''],
      req4: ['', Validators.required],
      opt4: [''],
      req5: ['', Validators.required],
      opt5: [''],
      req6: ['', Validators.required],
      opt6: ['', Validators.required],
      req7: ['', Validators.required],
      opt7: [''],
    });
  }

  ngOnInit(): void {
    this.form.get('req6')?.markAsTouched();
    this.form.get('opt6')?.markAsTouched();
  }

  isInvalid(name: string): boolean {
    const ctrl = this.form.get(name);
    return !!(ctrl?.invalid && ctrl?.touched);
  }

  errorId(name: string): string {
    return `${name}-error`;
  }

  helperId(name: string): string {
    return `${name}-helper`;
  }

  describedBy(name: string, hasHelper = false): string | null {
    const ids: string[] = [];
    if (this.isInvalid(name)) ids.push(this.errorId(name));
    if (hasHelper && !this.isInvalid(name)) ids.push(this.helperId(name));
    return ids.length ? ids.join(' ') : null;
  }

  onNext(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      this.statusMessage.set('يوجد أخطاء في النموذج، يرجى المراجعة.');
      setTimeout(() => this.focusFirstInvalid(), 0);
      return;
    }
    if (this.currentStep() < this.steps.length) {
      this.currentStep.update((s) => s + 1);
      this.statusMessage.set(`تم الانتقال إلى ${this.steps[this.currentStep() - 1].title}`);
    } else {
      this.statusMessage.set('تم إرسال النموذج بنجاح.');
    }
  }

  onBack(): void {
    if (this.currentStep() > 1) {
      this.currentStep.update((s) => s - 1);
      this.statusMessage.set(`تم الرجوع إلى ${this.steps[this.currentStep() - 1].title}`);
    }
  }

  isStepCompleted(index: number): boolean {
    return index + 1 < this.currentStep();
  }

  isStepActive(index: number): boolean {
    return index + 1 === this.currentStep();
  }

  private focusFirstInvalid(): void {
    const firstInvalid = Object.keys(this.form.controls).find((k) => this.form.get(k)?.invalid);
    if (!firstInvalid) return;
    const el = document.querySelector<HTMLInputElement>(`[formcontrolname="${firstInvalid}"]`);
    el?.focus();
  }
}
